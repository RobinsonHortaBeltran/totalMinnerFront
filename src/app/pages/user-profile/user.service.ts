import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("http://127.0.0.1:8000/api/users/");
  }

  postData(dataToSend:any) {
    // const dataToSend = { key1: "value1", key2: "value2" };
    this.http.post("https://api.example.com/post", dataToSend).subscribe(
      (data) => {
        console.log("Respuesta POST:", data);
      },
      (error) => {
        console.error("Error en POST:", error);
      }
    );
  }
}
