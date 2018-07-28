import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {HttpService} from '../../services/http.service';


const URL = 'http://api-globstage.atero.solutions/v1/files';


@Component({
  selector: 'app-upload-media-attach',
  templateUrl: './upload-media-attach.component.html',
  styleUrls: ['./upload-media-attach.component.scss']
})
export class UploadMediaAttachComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, disableMultipart: true});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  public uploadedImage;

  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<UploadMediaAttachComponent>
  ) { }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }



  ngOnInit() {
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
          console.log(JSON.parse(response));
          this.uploadedImage =  JSON.parse(response).attachment_src;
      };
  }




  onNoClick(): void {
    this.dialogRef.close();
  }

}
