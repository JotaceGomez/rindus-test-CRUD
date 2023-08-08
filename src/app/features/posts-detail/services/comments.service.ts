import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { COMMENTS_URL } from 'src/app/core/constants/endpoints';
import { CommentItem } from '../models/comment-item';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComment(id: number): Observable<CommentItem> {
    return this.http.get<CommentItem>(`${COMMENTS_URL}/${id}`);
  }

  createComment(item: CommentItem): Observable<CommentItem> {
    return this.http.post<CommentItem>(`${COMMENTS_URL}`, item);
  }

  updateComment(id: number, item: CommentItem): Observable<CommentItem> {
    return this.http.put<CommentItem>(`${COMMENTS_URL}/${id}`, item);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${COMMENTS_URL}/${id}`);
  }
}
