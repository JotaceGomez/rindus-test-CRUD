import { Injectable } from '@angular/core';
import { POSTS_URL } from 'src/app/core/constants/endpoints';
import { PostItem } from '../models/post-item.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<PostItem>> {
    return this.http.get<Array<PostItem>>(POSTS_URL);
  }
}
