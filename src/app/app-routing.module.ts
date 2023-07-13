import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCommentComponent } from './comment/list-comment/list-comment.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { UpdateCommentComponent } from './comment/update-comment/update-comment.component';

const routes: Routes = [
  {path:'',component:ListCommentComponent},
  {path:'addcomment',component:AddCommentComponent},
  {path:'updatecomment/:commentId',component:UpdateCommentComponent},
  {path:'comment-list',component:ListCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
