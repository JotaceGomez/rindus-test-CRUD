import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsDetailService } from 'src/app/features/posts-detail/services/posts-detail.service';
import { PostItem } from '../../models/post-item.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() id?: number;

  post?: PostItem;
  modalTitle?: string;
  postForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    private postDetailService: PostsDetailService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();

    if (this.id) {
      this.modalTitle = 'Edit Post';
      this.getPostAndPatchValues(this.id);
    } else {
      this.modalTitle = 'Create Post'
    }
  }

  initForm(): void {
    this.postForm = this.formBuilder.group({
      id: [''],
      title: [''],
      body: [''],
      userId: [''],
    });
  }

  onSave(): void {
    if (this.postForm.valid) {
      const formData = this.postForm.value;

      if (this.id) {
        const updatedPost: PostItem = {
          id: formData.id,
          title: formData.title,
          body: formData.body,
          userId: formData.userId
        };

        this.postDetailService.updatePost(updatedPost).subscribe(
          () => {
            console.log('Post updated successfully');
            this.activeModal.close();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      } else {
        const newPost: PostItem = {
          title: formData.title,
          body: formData.body,
          userId: formData.userId
        };

        this.postDetailService.createPost(newPost).subscribe(
          () => {
            console.log('New post created successfully');
            this.activeModal.close();
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }
    }
  }

  private getPostAndPatchValues(id: number): void {
    this.postDetailService.getPost(id).subscribe(res => {
      this.post = res;

      this.postForm.patchValue({
        id: this.post.id,
        title: this.post.title,
        body: this.post.body,
        userId: this.post.userId
      });
    });
  }
}