import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginPanel:boolean = false;
  public registerPanel:boolean = false;
  formgroupLog: FormGroup;
  formgroupReg: FormGroup;
  loading = false;
  formError = '';

  constructor(
    public formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
  ) { 
    this.formgroupReg = formbuilder.group({
      user_first_name:['',Validators.required],
      user_last_name:['',Validators.required],
      user_email:['',Validators.required],
      user_password:['',Validators.required],
      password_second:['',Validators.required],
    });

    this.formgroupLog = formbuilder.group({
      user_email:['',Validators.required],
      user_password:['',Validators.required],
    });

  }

  ngOnInit() {
  }
  openLogin(){
    this.loginPanel = true;
  }
  closeLogin(){
    this.loginPanel = false;
  }

  openRegister(){
    this.registerPanel = true;
  }
  closeRegister(){
    this.registerPanel = false;
  }

  signIn(form: NgForm) {
    this.loading = true;
    this.authService.signInUser(form.controls['user_name'].value, form.controls['user_password'].value)
      .subscribe(
        res => {
          localStorage.setItem('auth', JSON.stringify(res));

          this.authService.getUser(form.controls['user_name'].value).safeSubscribe(this, () => {
            this.router.navigate(['/profile']);
          });
        },
        error => {
          this.showError(error.error.detail);
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }

  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }

  onSignUp() {
    this.loading = true;
    this.authService.signUpUser(this.formgroupReg.value)
      .subscribe(response => {
        console.log(response, 'response');
        localStorage.setItem('auth', JSON.stringify(response.body.auth));
        this.userService.setUser(response.body.user);
       this.router.navigate(['/profile']);
      }, error => {
        this.loading = false;
        this.formError = 'true';
      }, () => {
        this.loading = false;
      });
  }

}
