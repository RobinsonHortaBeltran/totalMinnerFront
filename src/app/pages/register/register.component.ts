import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private register: RegisterService
              , private toast: ToastrService
              , private route: Router) {}
  private apiUrl: string = environment.apiUrl;
  username: string;
  email: string;
  pw1: string;
  pw2: string;
  code_referer: string;
  ngOnInit(): void {}
  registerUser(): void {
    if (this.validatePwd()) {
      let form: { password: string; code_refered: string; email: string; username: string };
     form = {
       username: this.username,
       email: this.email,
       password: this.pw1,
       code_refered: this.code_referer
     };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Indica que estás enviando datos en formato JSON
          // Puedes agregar más encabezados si es necesario
        },
        body: JSON.stringify(form) // Convierte los datos a formato JSON antes de enviarlos
      };
      // Realiza la solicitud POST utilizando fetch
      fetch(`${this.apiUrl}users/new`, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error en la solicitud POST');
          }
          return response.json(); // Parsea la respuesta JSON si la solicitud es exitosa
        })
        .then(data => {
          // Maneja la respuesta del servidor aquí
          console.log('Respuesta del servidor:', data);
          if (data.status == 200) {
            this.toast.success(data.message);
            this.resetForm();
            this.route.navigate(['/login']);
          } else {
            this.toast.error(data.message);
          }
        })
        .catch(error => {
          // Maneja los errores aquí
          console.error('Error:', error);
        });

     /*this.register.registerUser(form).subscribe(
       (response): void => {
         // tslint:disable-next-line:triple-equals
         if (response.status == 200) {
           this.toast.success(response.message);
           this.resetForm();
           this.route.navigate(['/login']);
         } else {
           this.toast.error(response.message);
         }
       },
       (err): void => {
         console.log(err);
       });*/
    } else {
      this.toast.error('Las contraseñas no coinciden');
    }
  }
  validatePwd(): boolean {
    return this.pw1 === this.pw2 ? true : false;
  }

  resetForm(): void {
    this.username = '';
    this.email = '';
    this.pw1 = '';
    this.pw2 = '';
    this.code_referer = '';
  }

}
