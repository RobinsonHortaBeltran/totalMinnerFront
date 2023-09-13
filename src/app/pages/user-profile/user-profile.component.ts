import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from "./user.service";
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
  saludar: string = "Hola mundo";
  disableParams: boolean = true;
  constructor(private apiUser: UserService) {}

  ngOnInit() {
    this.getData();
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
    },(error) => {
      console.error(error);
    })
  }
  
}
