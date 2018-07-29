import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/local-storage';
import { appConfig } from '../../app.config';
const URL = appConfig.apiUrl + '/files';

@Component({
  selector: 'app-user-upload-image',
  templateUrl: './user-upload-image.component.html',
  styleUrls: ['./user-upload-image.component.scss']
})
export class UserUploadImageComponent implements OnInit {

  public infoToggle;
  public uploadedImage;
  public uploader: FileUploader = new FileUploader({url: URL, disableMultipart: false});
    imageChangedEvent: any = '';
    croppedImage: any = '';

  constructor(private httpService: HttpClient,
    public dialogRef: MatDialogRef<UserUploadImageComponent>) { }

  ngOnInit() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(JSON.parse(response));
      this.uploadedImage =  JSON.parse(response).attachment_src;
  };
  }

  updateUploadImage() {
    this.httpService.put('/users', {'user_photo': this.uploadedImage}).subscribe(a => {
      const localUser: any = getFromLocalStorage('GLOBE_USER');
      localUser.user_photo = this.uploadedImage;
        setToLocalStorage('GLOBE_USER', localUser);
    });
  }

  showInfoToggle() {
    this.infoToggle = (this.infoToggle === true) ? false : true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.croppedImage = image;
    }
    imageLoaded() {
        // show cropper
    }
    loadImageFailed() {
        // show message
    }
}
