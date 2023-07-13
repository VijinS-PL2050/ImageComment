import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CommentService} from'src/app/shared/comment.service'

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {

  constructor(public commentService:CommentService,private router:Router) { }

  ngOnInit(): void {
    this.commentService.BindListComments();
  }

  //update comment --- passing id through
  editComment(commentId:number){
    console.log(commentId);
    this.router.navigate(['updatecomment',commentId]);
  }

}
