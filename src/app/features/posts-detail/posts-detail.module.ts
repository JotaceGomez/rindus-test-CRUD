import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CapitalizeFirstPipe } from 'src/app/core/custom-pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    PostsDetailComponent,
    CommentsComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule,
    PostsDetailRoutingModule
  ]
})
export class PostsDetailModule { }
