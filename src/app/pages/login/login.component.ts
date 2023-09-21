import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import {  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup<{ password: FormControl<string | null>; email: FormControl<string | null> }>
        = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });
  constructor(private api: LoginServiceService
              , private toast: ToastrService
              , private route: Router) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  loguear(form: any ): void {
      if (!form) {
          return;
      }
      this.api.LoginUser(form).subscribe((res): void => {
          // tslint:disable-next-line:triple-equals
          if (res.status != 200) {
              console.log(res.status);
              this.toast.error(res.message);
          } else {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('name', res.data.name);
              localStorage.setItem('rol', res.data.tipo); // tipo =1 admin. tipo =2 usuario
              localStorage.setItem('idUser', res.data.id); // tipo =1 admin. tipo =2 usuario

              this.route.navigate(['/dashboard']);
          }
      }, err => {
          console.log(err);
          this.toast.error(err.error.message);
      });
  }


}
