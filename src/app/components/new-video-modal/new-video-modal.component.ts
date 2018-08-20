import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { HttpService } from '../../services/http.service';
import { PostsService } from '../../services/posts.service';
import { VideoService } from '../../services/video.service';

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
  thumbUrl;

  constructor(
    public dialogRef: MatDialogRef<NewVideoModalComponent>,
    public videoServices: VideoService,
  ) {}

  ngOnInit() {
    this.newpostvideo = new FormGroup({
      linkvideo: new FormControl('', Validators.required),
      namevideo: new FormControl('', Validators.required),
      descvideo: new FormControl(),
      selectmembers: new FormControl(),
    });

    this.newpostvideo.valueChanges.subscribe(val => {
      this.getThumbnail(val);
    })
  }

  getNotification(name) {
    console.log(name);
  }

  done() {
    if (this.newpostvideo.valid) {
      this.videoServices.addVideo(
        {
          "video_name":this.newpostvideo.value.namevideo,
          "link_to_videos":this.newpostvideo.value.linkvideo,
          "video_description":this.newpostvideo.value.descvideo,
          "post_wall_id":JSON.parse(localStorage.getItem('GLOBE_USER')).id,
          "privacy":this.newpostvideo.value.selectmembers,
          "video_image": this.thumbUrl || '',

        }).subscribe();


      
    }
    this.videoName = this.newpostvideo.value.linkvideo.split('v=')[1];
    this.videoServices.getVideos().subscribe(
      posts => {
        console.log( posts);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getThumbnail(url){
    console.log(url);
    let videoName = url.split('v=')[1];
    this.thumbUrl = `https://img.youtube.com/vi/${videoName}}/0.jpg`;
  }

}
