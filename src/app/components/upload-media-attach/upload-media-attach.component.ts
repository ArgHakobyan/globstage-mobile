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

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(private httpService: HttpService,
    public dialogRef: MatDialogRef<UploadMediaAttachComponent>) { }


  ngOnInit() {
  }




  onNoClick(): void {
    this.dialogRef.close();
  }

}
