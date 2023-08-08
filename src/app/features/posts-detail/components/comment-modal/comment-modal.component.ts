import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentItem } from '../../models/comment-item';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {
  @Input() commentID?: number;
  @Input() postID!: number;

  comment?: CommentItem;
  modalTitle?: string;
  commentForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private commentsService: CommentsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    if (this.commentID) {
      this.modalTitle = 'Edit Comment';
      this.getCommentAndPatchValues(this.commentID);
    } else {
      this.modalTitle = 'Create Comment'
    }
  }

  initForm(): void {
    this.commentForm = this.formBuilder.group({
      postId: [''],
      id: [''],
      name: [''],
      email: [''],
      body: [''],
    });
  }

  onSave(): void {
    if (this.commentForm.valid) {
      const formData = this.commentForm.value;

      if (this.commentID) {
        const updatedComment: CommentItem = {
          postId: this.postID,
          id: formData.id,
          name: formData.name,
          email: formData.email,
          body: formData.body,
        };

        this.commentsService.updateComment(this.commentID, updatedComment).subscribe(
          () => {
            console.log('Comment updated successfully');
            this.activeModal.close();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      } else {
        const newComment: CommentItem = {
          postId: this.postID,
          name: formData.name,
          email: formData.email,
          body: formData.body,
        };

        this.commentsService.createComment(newComment).subscribe(
          () => {
            console.log('New comment created successfully');
            this.activeModal.close();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }
    }
  }

  private getCommentAndPatchValues(commentID: number): void {
    this.commentsService.getComment(commentID).subscribe(res => {
      this.comment = res;

      this.commentForm.patchValue({
        postId: this.comment.postId,
        id: this.comment.id,
        name: this.comment.name,
        email: this.comment.email,
        body: this.comment.body
      });
    });
  }
}