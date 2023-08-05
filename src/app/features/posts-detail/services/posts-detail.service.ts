import { Injectable } from '@angular/core';
import { POSTS_URL } from 'src/app/core/constants/endpoints';
import { PostItem } from 'src/app/features/posts-list/models/post-item.model'
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
}