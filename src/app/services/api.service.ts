import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityMovementModel } from '../models/entity-movement.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  
  private headers = new HttpHeaders();

  constructor(public httpClient: HttpClient) {
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append('Authorization', 'Bearer ' + environment.token);
  }

  getCardInfo(cardNumber: string): Observable<object> {
    console.log('getCardInfo:', cardNumber);

    let options = { 
      headers: this.headers,
      params: { cardNumber }
    };

    return this.httpClient.get(environment.api + '/fztracker/entities/v1', options);
  }
  
  addMovement(movement: EntityMovementModel): Observable<object> {
    console.log('addMovement:', movement);

    let options = { headers: this.headers };
    
    return this.httpClient.post(environment.api + '/fztracker/entities/v1/movement', movement, options);
  }
}