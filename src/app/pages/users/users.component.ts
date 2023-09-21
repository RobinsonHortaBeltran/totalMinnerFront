import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
import {Router} from '@angular/router';
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
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
  // @ts-ignore
  permiso:string = '1';
  mostrarPaymentsFlag: boolean = false;
  mostrarListarFlag: boolean = false;
  constructor(private apiUser: UserService,
              private route: Router) {}

  ngOnInit() {
    this.validate();
//this.permiso = localStorage.getItem('rol');

  }

  habilitar(): void {
    if (this.disableParams) {
      this.disableParams = false;
    } else {
      this.disableParams = true;
    }
  }

  validate(): void {
    const tokenKey = 'token'; // Reemplaza 'token' con la clave en la que has almacenado el token
    const token = localStorage.getItem(tokenKey);

    if (!token) {
      this.route.navigate(['/login']);
    }
  }
  listUsers() {
    //mostrar componente que lista usuarios
    this.mostrarPaymentsFlag = false;
    this.mostrarListarFlag = true;
  }
  listPayments() {
    //mostrar componente que lista pagos
    this.mostrarPaymentsFlag = true;
    this.mostrarListarFlag = false;
  }
}
