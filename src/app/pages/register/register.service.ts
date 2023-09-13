import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  postData(dataToSend: any) {
    // const dataToSend = { key1: "value1", key2: "value2" };
    return this.http.post("http://127.0.0.1:8000/api/users/new", dataToSend);
  }
}
