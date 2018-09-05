import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NewAudioModalComponent } from '../../new-audio-modal/new-audio-modal.component';
import { NewVideoModalComponent } from '../../new-video-modal/new-video-modal.component';
import { UploadMediaAttachComponent } from '../../upload-media-attach/upload-media-attach.component';
import { getFromLocalStorage } from '../../../utils/local-storage';
import {ChatService} from '../../../services/chat.service';
import { WallSmilesComponent } from '../../../components/wall/wall-smiles/wall-smiles.component';


@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
   entryComponents: [
    NewAudioModalComponent,
    UploadMediaAttachComponent,
    NewVideoModalComponent,
    WallSmilesComponent],
})
export class PostBoxComponent implements OnInit {
  formgroupWall: FormGroup;
  public smileClass = '';
  public userAvatar = '';
  @Input() type;
  @Input() wallId;
  @Input() groupId;
  @Output() postCreated = new EventEmitter<boolean>();
  attachements = [];
  attached = [];
  smileOpen = false;

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.formgroupWall = new FormGroup({
      user_wall: new FormControl()
   });
   this.userAvatar = getFromLocalStorage('GLOBE_USER').user_photo || '/assets/imgs/no_ava_50.png';
  }

  createPost() {
    if (this.wallId) {
      let mn = this.postsService.createWallPost({
        post_type: this.type,
        post_content: this.formgroupWall.get('user_wall').value,
        post_attachments: this.attachements,
        post_wall_id: this.wallId,
        author_id: getFromLocalStorage('GLOBE_USER').id,
        post_user_id: getFromLocalStorage('GLOBE_USER').id
      }).subscribe(res => {
        this.smileClass = '';
        this.formgroupWall.get('user_wall').setValue('');
        this.postCreated.emit();
        this.attached = [];
        this.attachements = [];
      });
    }
    if (this.groupId) {
      let mn = this.postsService.createWallPost({
        post_type: this.type,
        post_content: this.formgroupWall.get('user_wall').value,
        post_attachments: this.attachements,
        post_group_id: this.groupId,
        author_id: getFromLocalStorage('GLOBE_USER').id,
        post_user_id: getFromLocalStorage('GLOBE_USER').id
      }).subscribe(res => {
        this.smileClass = '';
        this.formgroupWall.get('user_wall').setValue('');
        this.postCreated.emit();
        this.attached = [];
        this.attachements = [];
      });
    }
  }



  openDialogAttach() {
    const dialogRef = this.dialog.open(UploadMediaAttachComponent, {
      height: 'auto',
      width: '500px',
    });

    dialogRef.componentInstance.onUpload.subscribe((res: any) => {
      console.log(JSON.parse(res).id);
      this.attachements.push(JSON.parse(res).id);
      this.attached.push(JSON.parse(res));
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

  openSmiles(window) {
    window.smileOpen = !window.smileOpen;
  }

  addSmile(e, window) {
    window.newMessage = window.newMessage ? window.newMessage + ` *${e}* ` : ` *${e}* `;
    window.smileOpen = false;
    console.log(e);
  }

}
