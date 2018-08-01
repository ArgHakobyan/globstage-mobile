import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-new-audio-modal',
  templateUrl: './new-audio-modal.component.html',
  styleUrls: ['./new-audio-modal.component.scss']
})
export class NewAudioModalComponent implements OnInit {
  audiosPosts = [];
  audioForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<NewAudioModalComponent>,
    public postServices: PostsService,
  ) { }

  ngOnInit() {
    this.audioForm = new FormGroup({
      audioInsertLink: new FormControl(),
    })
  }
  addAudio() {
    if (this.audioForm.valid) {
      this.postServices.createWallPost(
        {
          "posttype":"audio",
          "post_content":this.audioForm.value,
          "post_wall_id":JSON.parse(localStorage.getItem('GLOBE_USER')).id,
        }).subscribe()
    }
    this.postServices.getAudiosPosts(JSON.parse(localStorage.getItem('GLOBE_USER')).id).subscribe(
      audios => {
        this.audiosPosts = audios.body;
        console.log( this.audiosPosts);
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
