import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {appConfig} from '../../app.config';
import {getFromLocalStorage, setToLocalStorage} from '../../utils/local-storage';
import {UserService} from '../../services/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-user-crop-image',
  templateUrl: './user-crop-image.component.html',
  styleUrls: ['./user-crop-image.component.scss']
})
export class UserCropImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageFile: any;
  URL = appConfig.apiUrl + '/files';
  public uploader: FileUploader = new FileUploader({url: this.URL, disableMultipart: false});

  constructor(
    private userService: UserService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<UserCropImageComponent>
  ) {
  }

  ngOnInit() {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(image) {
    // console.log(image);
    this.croppedImage = image;

  }

  imageCroppedFile(image) {
    console.log(image);
    this.croppedImageFile = image;

  }

  imageLoaded() {
    // show cropper
  }

  loadImageFailed() {
    // show message
  }

  // updateUploadImage() {
  //     this.userService.changeAvatar(this.croppedImage).subscribe(a => {
  //         const localUser: any = getFromLocalStorage('GLOBE_USER');
  //         localUser.user_photo = this.croppedImage;
  //         setToLocalStorage('GLOBE_USER', localUser);
  //     });
  // }

  updateUploadImage() {
    let formData: FormData = new FormData();
    formData.append('uploadFile', this.croppedImageFile, 'avatar.jpeg');
    this.http.post(this.URL, formData)
      .map(res => res)
      .catch(error => error)
      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
