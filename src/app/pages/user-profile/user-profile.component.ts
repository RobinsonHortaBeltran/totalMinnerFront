import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import {Router} from '@angular/router';
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  nombrePila: string;
  correo: string;
  nombreCompleto: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  pais: string;
  saludar: string = 'Hola ' + localStorage.getItem('name');
  disableParams: boolean = true;
  constructor(private apiUser: UserService,
              private route: Router) {}

  ngOnInit() {
    this.getData();
    this.validate();
  }

  habilitar(): void {
    if (this.disableParams) {
      this.disableParams = false;
    } else {
      this.disableParams = true;
    }
  }

  getData() {
    this.apiUser.getData().subscribe((response) => {
      console.log(response);
    }, ( error ): void => {
      console.error(error);
    });
  }

  validate(): void {
    const tokenKey = 'token'; // Reemplaza 'token' con la clave en la que has almacenado el token

    const token = localStorage.getItem(tokenKey);

    if (!token) {
      this.route.navigate(['/login']);
    }
  }

}
