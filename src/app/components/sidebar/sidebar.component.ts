import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'INICIO',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/campaings', title: 'CAMPAÑAS',  icon: 'ni-planet text-blue', class: '' },
    //{ path: '/maps', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
     { path: '/users', title: 'LISTADO DE USUARIOS',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {


    const ver: number = Number(localStorage.getItem('rol'));

    // tslint:disable-next-line:triple-equals
    if (ver === 1) {
      this.menuItems = ROUTES.filter((menuItem) => menuItem);
    } else {
      this.menuItems =  ver === 2 ? ROUTES.filter(route => route.path === '/dashboard' || route.path === '/campaings') : [];
    }
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  salir(): void {
    this.router.navigate(["/login"]);
  }
}
