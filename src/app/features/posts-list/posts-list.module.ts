import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { CustomPipesModule } from 'src/app/core/custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [
    PostsListComponent,

  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    CustomPipesModule
  ]
})
export class PostsListModule { }
