import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { ListCommentComponent } from './comment/list-comment/list-comment.component';
import { HttpClientModule} from '@angular/common/http';
import { AddCommentComponent } from './comment/add-comment/add-comment.component'
import { FormsModule } from '@angular/forms';
import { UpdateCommentComponent } from './comment/update-comment/update-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    ListCommentComponent,
    AddCommentComponent,
    UpdateCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
