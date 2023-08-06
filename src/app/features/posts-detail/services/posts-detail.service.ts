import { Injectable } from '@angular/core';
import { POSTS_URL } from 'src/app/core/constants/endpoints';
import { PostItem } from 'src/app/features/posts-list/models/post-item.model'
import { CommentItem } from '../models/comment-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsDetailService {

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<PostItem> {
    return this.http.get<PostItem>(`${POSTS_URL}/${id}`);
  }

  createPost(item: PostItem): Observable<PostItem> {
    return this.http.post<PostItem>(POSTS_URL, item);
  }

  updatePost(item: PostItem): Observable<PostItem> {
    return this.http.put<PostItem>(`${POSTS_URL}/${item.id}`, item);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${POSTS_URL}/${id}`);
  }

  getComments(id: number): Observable<Array<CommentItem>> {
    return this.http.get<Array<CommentItem>>(`${POSTS_URL}/${id}/comments`);
  }
}