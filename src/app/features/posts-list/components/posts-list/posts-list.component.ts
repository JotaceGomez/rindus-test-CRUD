import { Component, OnInit } from '@angular/core';
import { PostsListService } from '../../services/posts-list.service';
import { PostItem } from '../../models/post-item.model';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts: Array<PostItem> = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(
    private postsListService: PostsListService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  checkPost(id: number): void {
    this.router.navigateByUrl(`/posts/${id}`);
  }

  openModal(id?: number) {
    const options: NgbModalOptions = {
      size: 'xl',
      centered: true
    };
    const modalRef = this.modalService.open(ModalComponent, options);
    modalRef.componentInstance.id = id;
  }

  openModalDelete(id: number, title: string) {
    const options: NgbModalOptions = {
      size: 'lg',
      centered: true
    };
    const modalRef = this.modalService.open(DeleteModalComponent, options);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.postTitle = title;
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortPostsByTitle();
  }

  sortPostsByTitle(): void {
    this.dataPosts.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (this.sortOrder === 'asc') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
  }

  private getPosts(): void {
    this.postsListService.getPosts().subscribe(res => {
      this.dataPosts = res;
    })
  }
}
