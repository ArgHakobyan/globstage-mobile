import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NewAudioModalComponent } from '../new-audio-modal/new-audio-modal.component';
import { NewVideoModalComponent } from '../new-video-modal/new-video-modal.component';
import { UploadMediaAttachComponent } from '../../components/upload-media-attach/upload-media-attach.component';
import { getFromLocalStorage } from '../../utils/local-storage';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
   entryComponents: [
    NewAudioModalComponent,
    UploadMediaAttachComponent,
    NewVideoModalComponent],
})
export class PostBoxComponent implements OnInit {
  formgroupWall: FormGroup;
  public smileClass = '';
  public userAvatar = '';
  @Input() type;
  @Output() postCreated = new EventEmitter<boolean>();

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.formgroupWall = new FormGroup({
      user_wall: new FormControl()
   });
   this.userAvatar = getFromLocalStorage('GLOBE_USER').user_photo || '../assets/imgs/no_ava_50.png';
  }

  createPost() {
    let mn = this.postsService.createWallPost({
      post_type: this.type,
      post_content: this.formgroupWall.get('user_wall').value,
      post_attachments: [],
      post_wall_id:  getFromLocalStorage('GLOBE_USER').id,
      author_id: getFromLocalStorage('GLOBE_USER').id,
      post_user_id: getFromLocalStorage('GLOBE_USER').id
    }).subscribe(res => {
      this.smileClass = '';
      this.formgroupWall.get('user_wall').setValue('');
      this.postCreated.emit();
    });
  }

  openDialogAttach() {
    const dialogRef = this.dialog.open(UploadMediaAttachComponent, {
      height: 'auto',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogVideo() {
    const dialogRef = this.dialog.open(NewVideoModalComponent, {
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogAudio() {
    const dialogRef = this.dialog.open(NewAudioModalComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  smileFocusFunction() {
    this.smileClass = 'focusSmile';
  }

  smileFocusOutFunction() {
    // this.smileClass = '';
  }

}
