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
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgChatModule } from './components/ng-chat/ng-chat.module';
import { GlobeAdapter } from './services/chatAdapter';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FileUploadModule } from 'ng2-file-upload';
import { PostsService } from './services/posts.service';



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
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { GroupComponent } from './pages/group/group.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { NewGroupModalComponent } from './components/new-group-modal/new-group-modal.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NewNotesModalComponent } from './components/new-notes-modal/new-notes-modal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserUploadImageComponent } from './components/user-upload-image/user-upload-image.component';
import { UploadMediaAttachComponent } from './components/upload-media-attach/upload-media-attach.component';
import { PostBoxComponent } from './components/post-box/post-box.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchAllComponent } from './components/search-all/search-all.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserGlobTabsComponent } from './components/user-glob-tabs/user-glob-tabs.component';
import { UserProfileInfoComponent } from './components/user-profile-info/user-profile-info.component';
import { UserProfileImageComponent } from './components/user-profile-image/user-profile-image.component';
import { MessagesComponent } from './pages/messages/messages.component';

const appRoutes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'group',  component: GroupComponent },
  { path: 'notes',  component: NotesComponent },
  { path: 'messages',  component: MessagesComponent },
  { path: 'settings',  component: SettingsComponent },
  { path: 'privacy',  component: PrivacyComponent },
  { path: 'friends',  component: FriendsComponent },
  { path: 'search',  component: SearchComponent },
  { path: 'user-profile/:id',  component: UserProfileComponent },
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
    NewVideoModalComponent,
    ProfileInfoComponent,
    NewsComponent,
    ContactComponent,
    GroupComponent,
    HomeMenuComponent,
    ProfileImageComponent,
    NewGroupModalComponent,
    NotesComponent,
    NewNotesModalComponent,
    SettingsComponent,
    UserUploadImageComponent,
    UploadMediaAttachComponent,
    PostBoxComponent,
    FriendsComponent,
    PrivacyComponent,
    SearchComponent,
    SearchAllComponent,
    UserProfileComponent,
    UserGlobTabsComponent,
    UserProfileInfoComponent,
    UserProfileImageComponent,
    MessagesComponent
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
    MatIconModule,
    MatDatepickerModule,
    NgChatModule,
    MatCheckboxModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZ-8jW9x7sh66bIizdlYbWSa5AHZ3Bi2E',
      libraries: ['places']
})
  ],
  providers: [
    AuthService,
    HttpService,
    UserService,
    GlobeAdapter,
    PostsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewAlbumModalComponent,
    NewAudioModalComponent,
    NewVideoModalComponent,
    NewGroupModalComponent,
    NewGroupModalComponent,
    NewNotesModalComponent,
    UserUploadImageComponent,
    UploadMediaAttachComponent,
    SearchAllComponent,
  ]
})
export class AppModule { }
