import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';


@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule
  ]
})
export class PostsListModule { }
