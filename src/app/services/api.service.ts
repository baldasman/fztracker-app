import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityMovementModel } from '../models/entity-movement.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  
  connected: boolean = false;
  private headers = new HttpHeaders();
  private statusTimer = null;

  constructor(public httpClient: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer ' + environment.token);

    this.checkStatus();

    console.log('setup status timer');
    this.statusTimer = setInterval(() => {this.checkStatus();}, 30000);
  }

  getCardInfo(cardNumber: string, cardId: string): Observable<object> {
    console.log('getCardInfo:', cardNumber);

    let params = {};

    if (cardNumber) {
      params = {...params, cardNumber};
    }

    if (cardId) {
      params = {...params, cardId};
    }

    let options = { 
      headers: this.headers,
      params
    };

    return this.httpClient.get(environment.api + '/fztracker/entities/v1', options);
  }
  
  addMovement(movement: EntityMovementModel): Observable<object> {
    console.log('addMovement:', movement);

    let options = { headers: this.headers };
    
    return this.httpClient.post(environment.api + '/fztracker/entities/v1/movement', movement, options);
  }

  private checkStatus() {
    console.log('checkStatus', new Date());

    let options = { 
      headers: this.headers
    };
    return this.httpClient.get(environment.api + '/admin/status', options).subscribe(response => {
      console.log('STATUS: OK');
      this.connected = true;
    }, error => {
      console.error('STATUS: DEAD');
      this.connected = false;
    });
  }
}