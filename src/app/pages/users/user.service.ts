import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = environment.apiUrl;
  getData() {
    return this.http.get('http://127.0.0.1:8000/api/users/');
  }

  postData(dataToSend:any) {
    // const dataToSend = { key1: "value1", key2: "value2" };
    this.http.post(' https://api.example.com/post', dataToSend).subscribe(
      (data) => {
        console.log('Respuesta POST:', data);
      },
      (error) => {
        console.error('Error en POST:', error);
      }
    );
  }

  deleteUser(form: any ): void {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Indica que estás enviando datos en formato JSON
        // Puedes agregar más encabezados si es necesario
      },
      body: JSON.stringify(form) // Convierte los datos a formato JSON antes de enviarlos
    };
    fetch(`${this.apiUrl}users/delete`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud POST');
        }
        return response.json(); // Parsea la respuesta JSON si la solicitud es exitosa
      })
      .then(data => {
        return data;
        location.reload()
      })
      .catch(error => {
        // Maneja los errores aquí
        return error;
      });
  }
}
