import { Component, OnInit } from '@angular/core';
import { PostsListService } from '../../services/posts-list.service';
import { PostItem } from '../../models/post-item.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts: Array<PostItem> = [];

  constructor(private postsListService: PostsListService,
    private router: Router) { }

  ngOnInit(): void {
    this.postsListService.getPosts().subscribe(res => {
      this.dataPosts = res;
    })
  }

  checkPost(id: number): void {
    this.router.navigateByUrl(`/posts/${id}`);
  }
}
