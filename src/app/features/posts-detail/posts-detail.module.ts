import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailRoutingModule } from './posts-detail-routing.module';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CustomPipesModule } from 'src/app/core/custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [
    PostsDetailComponent,
    CommentsComponent,

  ],
  imports: [
    CommonModule,
    PostsDetailRoutingModule,
    CustomPipesModule
  ]
})
export class PostsDetailModule { }
