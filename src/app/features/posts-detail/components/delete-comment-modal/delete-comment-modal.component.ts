import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-delete-comment-modal',
  templateUrl: './delete-comment-modal.component.html',
  styleUrls: ['./delete-comment-modal.component.scss']
})
export class DeleteCommentModalComponent implements OnInit {
  @Input() commentID!: number;
  @Input() email!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void { }

  onDelete(): void {
    this.commentsService.deleteComment(this.commentID).subscribe(
      () => {
        console.log('Comment deleted successfully');
        this.activeModal.close();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
