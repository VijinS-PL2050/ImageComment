import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {environment } from'src/environments/environment';
import { Observable } from 'rxjs';
import{Comment} from './comment'
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comment:Comment[];
  formData:Comment = new Comment();
  constructor(private httpClient:HttpClient) { }

  //list comment
  BindListComments(){
    this.httpClient.get(environment.apiUrl+'/api/comments').toPromise().then(Response => this.comment=Response as Comment[])
  }

  //insert comment
  insertComment(comment:Comment):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/comments',comment);
  }

  //get the comment
  getComment(commentId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/comments/"+commentId);
  }

  //update
  updateComment(comment:Comment):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/comments",comment);
  }

}
