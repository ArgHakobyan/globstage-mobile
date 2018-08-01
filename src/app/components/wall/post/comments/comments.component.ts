import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../../services/comment.service';
import {FormControl, FormGroup} from "@angular/forms";
import {getFromLocalStorage} from "../../../../utils/local-storage";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  formgroupComment: FormGroup;
  @Input() postId;
  @Input() comments;
  @Input() post;
  // public  comments;
  // public post;
  public activeClass;
  public userAvatar = '';
  public smileClass = '';
  constructor(private commentService: CommentService,) { }

  ngOnInit() {
    this.formgroupComment = new FormGroup({
      user_comment: new FormControl()
    });
    this.userAvatar = getFromLocalStorage('GLOBE_USER').user_photo || '../assets/imgs/no_ava_50.png';
  }

  focusFunction() {
    this.activeClass = 'focus';
  }

  focusOutFunction(){
    // this.activeClass = '';
  }

  postComment() {
    let mn = this.commentService.postComment({
      comment_content: this.formgroupComment.get('user_comment').value,
      comment_post_id:  this.postId,
      comment_for: "post",
    }).subscribe(res => {
      this.smileClass = '';
      this.formgroupComment.get('user_comment').setValue('');
    });
  }
}

