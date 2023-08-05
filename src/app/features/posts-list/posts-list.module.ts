import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { CapitalizeFirstPipe } from 'src/app/core/custom-pipes/capitalize-first.pipe';


@NgModule({
  declarations: [
    PostsListComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,    
  ]
})
export class PostsListModule { }
