import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaingService {

constructor(private http: HttpClient, private toast:ToastrService) { }
  private apiUrl: string = environment.apiUrl;

registerCampain(form): void {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Indica que estás enviando datos en formato JSON
      // Puedes agregar más encabezados si es necesario
    },
    body: JSON.stringify(form) // Convierte los datos a formato JSON antes de enviarlos
  };

  fetch(`${this.apiUrl}campaing/new`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud POST');
      }
      return response.json(); // Parsea la respuesta JSON si la solicitud es exitosa
    })
    .then(data => {
      // tslint:disable-next-line:triple-equals
      if (data.code == 200) {
        this.toast.success(data.message);
      }  {
        this.toast.error(data.message);
      }
      setTimeout(() => {
        location.reload();
      }, 3000); // 3000 milisegundos (3 segundos)
    })
    .catch(error => {
      // Maneja los errores aquí
      return error;
    });
  }
  getCampaing() {
    return this.http.get(`${this.apiUrl}campaing`);
  }
  deleteCampaing(id: string ){
    return this.http.delete(`${this.apiUrl}campaing/delete/${id}`);
  }

  uploadFile(file: File, campaignId: any, monto:any ): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('campaignId', campaignId.toString());
    formData.append('userId', localStorage.getItem('idUser'));
    formData.append('amount', monto);
    return new Observable((observer) => {
      fetch(`${this.apiUrl}file/upload`, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
  getPayments() {
    return this.http.get(`${this.apiUrl}file/index`);
  }
}
