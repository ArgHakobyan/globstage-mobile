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
  public email;
  public password;
  public password_first;
  public password_second;
  public lastname;
  public name;
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
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password_first:['',Validators.required],
      password_second:['',Validators.required],
    });

    this.formgroupLog = formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });

    this.name = this.formgroupReg.controls['name'];
    this.lastname = this.formgroupReg.controls['lastname'];
    this.email = this.formgroupReg.controls['email'];
    this.password_first = this.formgroupReg.controls['password_first'];
    this.password_second = this.formgroupReg.controls['password_second'];
    this.email = this.formgroupLog.controls['email'];
    this.password = this.formgroupLog.controls['password'];
    
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
    this.authService.signInUser(form.controls['email'].value, form.controls['password'].value)
      .subscribe(
        res => {
          localStorage.setItem('auth', JSON.stringify(res));

          this.authService.getUser(form.controls['email'].value).safeSubscribe(this, () => {
            this.router.navigate(['/personal']);
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
    let sendData = new User();
    
    sendData.name = this.formgroupReg.get('name').value;
    sendData.lastname = this.formgroupReg.get('lastname').value;
    sendData.email = this.formgroupReg.get('email').value;
    sendData.password_second = this.formgroupReg.get('password_second').value;    

    this.authService.signUpUser(sendData)
      .subscribe(response => {
        console.log(response, 'response');
        localStorage.setItem('auth', JSON.stringify(response.body.user.auth));
        this.userService.setUser(response.body.user);
       this.router.navigate(['/personal']);
      }, error => {
        this.loading = false;
        this.formError = 'true';
      }, () => {
        this.loading = false;
      });
  }

}
