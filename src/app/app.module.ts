import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AuthService} from './services/auth.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const appRoutes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'profile',  component: ProfileComponent }
 ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    AuthService,
    HttpService,
    UserService,
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
