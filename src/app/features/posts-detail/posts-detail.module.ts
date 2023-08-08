import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomPipesModule } from 'src/app/core/custom-pipes/custom-pipes.module';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { DeleteCommentModalComponent } from './components/delete-comment-modal/delete-comment-modal.component';
import { CommentModalComponent } from './components/comment-modal/comment-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsDetailComponent,
    CommentsComponent,
    DeleteCommentModalComponent,
    CommentModalComponent,
  ],
  imports: [
    CommonModule,
    PostsDetailRoutingModule,
    CustomPipesModule,
    ReactiveFormsModule
  ]
})
export class PostsDetailModule { }
