import {Component, Input , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private route: Router, private apiUser: UserService, private toast: ToastrService) { }
  users: any = [];
  ngOnInit() {
    this.validate();
    this.getDataList();
  }
  validate(): void {
    const tokenKey = 'token'; // Reemplaza 'token' con la clave en la que has almacenado el token
    const token = localStorage.getItem(tokenKey);
    if (!token) {
      this.route.navigate(['/login']);
    }
  }

  getDataList() {
    return this.apiUser.getData().subscribe((response: any ): void => {
      // tslint:disable-next-line:triple-equals
      if (response.code == 200) {
        this.users = response.data;
        this.toast.success(response.message);
      } else {
        this.toast.error(response.message);
      }

    });
  }

  deleteUser(id: any ): void {
    const tokenKey = localStorage.getItem('token');
    const data = {
      token: tokenKey,
      id: id
    };

    this.apiUser.deleteUser(data);
  }
}
