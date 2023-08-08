import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsDetailService } from 'src/app/features/posts-detail/services/posts-detail.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  @Input() id?: number;
  @Input() postTitle?: string;

  constructor(
    public activeModal: NgbActiveModal,
    private postDetailService: PostsDetailService
  ) { }

  ngOnInit(): void { }

  onDelete(): void {
    if (this.id) {
      this.postDetailService.deletePost(this.id).subscribe(
        () => {
          console.log('Post deleted successfully');
          this.activeModal.close();
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}