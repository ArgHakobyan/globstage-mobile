import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { getFromLocalStorage, setToLocalStorage } from '../../utils/local-storage';

const URL = 'http://api-globstage.atero.solutions/v1/files';

@Component({
  selector: 'app-user-upload-image',
  templateUrl: './user-upload-image.component.html',
  styleUrls: ['./user-upload-image.component.scss']
})
export class UserUploadImageComponent implements OnInit {

  public infoToggle;
  public uploadedImage;
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

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
}
