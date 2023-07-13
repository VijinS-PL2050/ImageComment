import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.scss']
})
export class UpdateCommentComponent implements OnInit {

  //declare variable
  commentId:number;
  comment:Comment=new Comment();
  constructor(private route:ActivatedRoute,private commentService:CommentService) { }

  ngOnInit(): void {
    //getting the id passed from the browser URL
    this.commentId=this.route.snapshot.params['commentId'];
    this.commentService.getComment(this.commentId).subscribe(data=>{
      console.log(data)
      this.comment=data;
      //changing  the date format
      var datePipe=new DatePipe("en-Uk");
      let formatedyear:any=datePipe.transform(data.createDate,'yyyy-MM-dd');
      data.createDate=formatedyear;
      this.commentService.formData=Object.assign({},data);
    },error=>console.log(error));
  }

}
