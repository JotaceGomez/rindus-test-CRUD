import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    PostsDetailComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    PostsDetailRoutingModule
  ]
})
export class PostsDetailModule { }
