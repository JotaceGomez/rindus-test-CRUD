import { Component, OnInit } from '@angular/core';
import { PostsDetailService } from '../../services/posts-detail.service';
import { PostItem } from 'src/app/features/posts-list/models/post-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

  id!: number;
  post!: PostItem;

  constructor(
    private postDetailService: PostsDetailService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit(): void {
    this.getPost();
  }

  private getPost(): void {
    this.postDetailService.getPost(this.id).subscribe(res => {
      this.post = res;
    });
  }
}