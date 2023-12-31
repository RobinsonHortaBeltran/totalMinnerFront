import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NewCampaingComponent} from './new-campaing/new-campaing.component';

import {ListCampaingComponent} from './list-campaing/list-campaing.component';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  saludarCamp: string = 'Hola ' + localStorage.getItem('name');
  public copy: string;
  mostrarCampFlag = false;
  mostrarListarFlag = false;
  hidden = false;
  constructor(private route: Router) { }

  ngOnInit() {
    this.validate();
    const ver: number = Number(localStorage.getItem('rol'));
    console.log(ver);
    // tslint:disable-next-line:triple-equals
    if (ver === 1) {
      this.hidden = true;
    }
  }

  validate(): void {
    const tokenKey = 'token'; // Reemplaza 'token' con la clave en la que has almacenado el token

    const token = localStorage.getItem(tokenKey);

    if (!token) {
      this.route.navigate(['/login']);
    }
  }
  list() {
    this.mostrarCampFlag = true;
    this.mostrarListarFlag = false;
  }

  create() {
    this.mostrarCampFlag = false;
    this.mostrarListarFlag = true;
  }
}
