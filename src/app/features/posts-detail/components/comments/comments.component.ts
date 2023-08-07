import { Component, Input, OnInit } from '@angular/core';
import { PostsDetailService } from '../../services/posts-detail.service';
import { CommentItem } from '../../models/comment-item';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;

  comments: Array<CommentItem> = []
  commentString: string = 'Comments'

  constructor(private postDetailService: PostsDetailService,
  ) { }

  ngOnInit(): void {
    this.getComments();    
  }

  private getComments(): void {
    this.postDetailService.getComments(this.id).subscribe(res => {
      this.comments = res;      
    });
  }
}
