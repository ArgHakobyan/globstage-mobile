import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {getFromLocalStorage, setToLocalStorage} from '../../utils/local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginPanel = false;
  public registerPanel = false;
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

  }

  ngOnInit() {

    if (this.authService.isLogged()) {
      this.router.navigate(['/profile']);
    }

    this.formgroupReg = this.formbuilder.group({
      user_first_name: ['', Validators.required],
      user_last_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_password: ['', Validators.required],
      password_second: ['', Validators.required],
    });

    this.formgroupLog = this.formbuilder.group({
      user_name: ['', Validators.required],
      user_password: ['', Validators.required],
    });

    this.name = this.formgroupReg.controls['name'];
    this.lastname = this.formgroupReg.controls['lastname'];
    this.email = this.formgroupReg.controls['email'];
    this.password_first = this.formgroupReg.controls['password_first'];
    this.password_second = this.formgroupReg.controls['password_second'];
    this.email = this.formgroupLog.controls['email'];
    this.password = this.formgroupLog.controls['password'];

  }
  openLogin() {
    this.loginPanel = true;
  }
  closeLogin() {
    this.loginPanel = false;
  }

  openRegister() {
    this.registerPanel = true;
  }
  closeRegister() {
    this.registerPanel = false;
  }

  signIn(form: NgForm) {
    this.loading = true;
    this.authService.signInUser(form.controls['user_name'].value, form.controls['user_password'].value)
      .subscribe(
        res => {
          console.log(res);
            setToLocalStorage('GLOBE_AUTH', res.auth);
          this.userService.setUser(res.user);
          this.router.navigate(['/profile']);
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
    const sendData = new User();
    sendData.user_name = this.formgroupReg.get('user_first_name').value;
    sendData.user_first_name = this.formgroupReg.get('user_first_name').value;
    sendData.user_last_name = this.formgroupReg.get('user_last_name').value;
    sendData.user_email = this.formgroupReg.get('user_email').value;
    sendData.user_password = this.formgroupReg.get('password_second').value;

    this.authService.signUpUser(sendData)
      .subscribe(response => {
        console.log(response, 'response');
        setToLocalStorage('GLOBE_AUTH', response.auth);
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
