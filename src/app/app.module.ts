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
import { AuthService} from './services/auth.service';
import { HttpService } from './services/http.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GlobTabsComponent } from './components/glob-tabs/glob-tabs.component';
import { WallComponent } from './components/wall/wall.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSelectModule} from '@angular/material/select';

import {MatInputModule} from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { NewAlbumModalComponent } from './components/new-album-modal/new-album-modal.component';
import { NewAudioModalComponent } from './components/new-audio-modal/new-audio-modal.component';
import { NewVideoModalComponent } from './components/new-video-modal/new-video-modal.component';

const appRoutes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'profile',  component: ProfileComponent },
 ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    GlobTabsComponent,
    WallComponent,
    PostComponent,
    HeaderComponent,
    NewAlbumModalComponent,
    NewAudioModalComponent,
    NewVideoModalComponent
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
    MatSelectModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    HttpModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [
    AuthService,
    HttpService,
    UserService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewAlbumModalComponent,
    NewAudioModalComponent,
    NewVideoModalComponent
  ]
})
export class AppModule { }
