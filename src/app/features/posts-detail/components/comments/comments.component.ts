import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CommentItem } from '../../models/comment-item';
import { PostsDetailService } from '../../services/posts-detail.service';
import { CommentModalComponent } from '../comment-modal/comment-modal.component';
import { DeleteCommentModalComponent } from '../delete-comment-modal/delete-comment-modal.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;

  comments: Array<CommentItem> = []
  commentString: string = 'Comments'

  constructor(
    private postDetailService: PostsDetailService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  private getComments(): void {
    this.postDetailService.getComments(this.id).subscribe(res => {
      this.comments = res;
    });
  }

  openModal(commentID?: number) {
    const options: NgbModalOptions = {
      size: 'xl',
      centered: true
    };
    const modalRef = this.modalService.open(CommentModalComponent, options);
    modalRef.componentInstance.commentID = commentID;
    modalRef.componentInstance.postID = this.id;
  }

  openModalDelete(commentID: number, email: string) {
    const options: NgbModalOptions = {
      size: 'lg',
      centered: true
    };
    const modalRef = this.modalService.open(DeleteCommentModalComponent, options);
    modalRef.componentInstance.commentID = commentID;
    modalRef.componentInstance.email = email;
  }
}
