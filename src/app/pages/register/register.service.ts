import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {
  }

  private apiUrl: string = environment.apiUrl;
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer tu_token')
    .set('Accept', 'application/json');

  registerUser(dataToSend: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users/new/`, dataToSend);
  }
  register(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}users/new/`);
  }
}
