import { Component, OnInit } from '@angular/core';
import { PostsListService } from '../../services/posts-list.service';
import { PostItem } from '../../models/post-item.model';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  dataPosts: Array<PostItem> = [];

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


  private getPosts(): void {
    this.postsListService.getPosts().subscribe(res => {
      this.dataPosts = res;
    })
  }
}
