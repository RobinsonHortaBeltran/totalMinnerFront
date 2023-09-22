import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  LoginUser(dataToSend: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}users/login`, dataToSend);
  }
}
