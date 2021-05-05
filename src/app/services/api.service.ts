import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EntityMovementModel } from '../models/entity-movement.model';

@Injectable({ providedIn: 'root' })
export class ApiService {

  connected: boolean = false;
  private headers = null;
  private statusTimer = null;
  private token = null;
  private api = null;

  constructor(public httpClient: HttpClient, private nativeStorage: NativeStorage, private apiService: ApiService) {
    this.token = environment.token;
    this.api = environment.api;

    this.setHeaders();

    this.checkStatus();

    this.statusTimer = setInterval(() => { this.checkStatus(); }, 30000);

    this.nativeStorage.getItem("config").then(
      data => {
        console.log('get iten config', data);

        if (data) {
          const config = JSON.parse(data);
          this.api = config.ip;
          console.log('update ip', this.api);
        };
      },
      error => console.error(error)
    );

    this.nativeStorage.getItem("token").then(
      data => {
        console.log('get iten token', data);

        if (data) {
          this.token = data;
          console.log('update token', this.token);

          this.setHeaders();
        };
      },
      error => console.error(error)
    );
  }

  setHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer ' + this.token);
  }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
    this.headers.set('Authorization', 'Bearer ' + this.token);
  }

  setApi(api: string) {
    this.api = api;
  }

  getApi() { 
    return this.api; 
  }

  getCardInfo(cardNumber: string, cardId: string): Observable<object> {
    console.log('getCardInfo:', cardNumber);

    let params = {};

    if (cardNumber) {
      params = { ...params, cardNumber };
    }

    if (cardId) {
      params = { ...params, cardId };
    }

    let options = {
      headers: this.headers,
      params
    };

    return this.httpClient.get(this.api + '/fztracker/entities/v1', options);
  }

  addMovement(movement: EntityMovementModel): Observable<object> {
    console.log('addMovement:', movement);

    let options = { headers: this.headers };

    return this.httpClient.post(this.api + '/fztracker/entities/v1/movement', movement, options);
  }

  signIn(username: string, password: string): Observable<{ token: string }> {
    // const url = new UrlModel(this.apiUrl).setPath('auth/v1/signin');
    return this.httpClient.post(this.api + '/auth/v1/signin', { authId: username, password, sessionType: 'portal' })
      .pipe(
        map((response: { data: any }) => response.data)
      );
  }


  private checkStatus() {
    console.log('checkStatus', new Date());

    let options = {
      headers: this.headers
    };
    return this.httpClient.get(this.api + '/admin/status', options).subscribe(response => {
      console.log('STATUS: OK');
      this.connected = true;
    }, error => {
      console.error('STATUS: DEAD');
      this.connected = false;
    });
  }
}