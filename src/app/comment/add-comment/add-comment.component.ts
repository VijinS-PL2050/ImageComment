import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from 'src/app/shared/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(public commentService:CommentService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    let addId=this.commentService.formData.commentId;
    if(addId==0||addId==null){
      console.log(form.value);
      this.insertComment(form);
    }else{
      this.updateComment(form);
    }
  }
  updateComment(form: NgForm) {
    console.log('updating...');
    this.commentService.updateComment(form.value).subscribe((resultx=>{
      console.log(resultx);
      this.resetForm(form);
      alert('Sucessfully updated...')
      this.router.navigate(['comment-list']);
    }))
  }
  resetForm(form: NgForm) {
   if(form!=null){
    form.resetForm();
   }
  }


  insertComment(form: NgForm){
    console.log("Inserting the comment");
    this.commentService.insertComment(form.value).subscribe((resultx =>{ console.log(resultx); alert("inserted sucessfully");} ))

  }

}
