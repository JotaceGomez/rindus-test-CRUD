import { Component, OnInit } from '@angular/core';
import { PostsListService } from '../../services/posts-list.service';
import { PostItem } from '../../models/post-item.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts: Array<PostItem> = [];

  constructor(private postsListService: PostsListService) { }

  ngOnInit(): void {
    this.postsListService.getPosts().subscribe(res => {
      this.dataPosts = res;
    })
  }
}
