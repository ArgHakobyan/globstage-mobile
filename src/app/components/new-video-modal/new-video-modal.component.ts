import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { HttpService } from '../../services/http.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-new-video-modal',
  templateUrl: './new-video-modal.component.html',
  styleUrls: ['./new-video-modal.component.scss']
})
export class NewVideoModalComponent implements OnInit {
  @Input() videoPost;
  videosPosts = [];
  selected3 = 'option1';
  public newpostvideo: FormGroup;
  videoName;
  public selectmembers = {};

  constructor(
    public dialogRef: MatDialogRef<NewVideoModalComponent>,
    public http: HttpService,
    public postServices: PostsService,
  ) {}

  ngOnInit() {
    this.newpostvideo = new FormGroup({
      linkvideo: new FormControl('', Validators.required),
      namevideo: new FormControl('', Validators.required),
      descvideo: new FormControl(),
      selectmembers: new FormControl(),
    })

    this.done();
  }

  getNotification(name) {
    console.log(name);
  }

  done() {
    if (this.newpostvideo.valid) {
      this.postServices.createWallPost(
        {
          "posttype":"video",
          "post_attachments":this.newpostvideo.value.linkvideo,
          "post_content":this.newpostvideo.value.namevideo,
          "post_wall_id":JSON.parse(localStorage.getItem('GLOBE_USER')).id,

        }).subscribe()
      this.getNotification;
      // this.newpostvideo.value
    }
    this.videoName = this.newpostvideo.value.linkvideo.split('v=')[1];    
    this.postServices.getVideosPosts(JSON.parse(localStorage.getItem('GLOBE_USER')).id).subscribe(
      posts => {
        this.videosPosts = posts.body;
        console.log( this.videosPosts);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
