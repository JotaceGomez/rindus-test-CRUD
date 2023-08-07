import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { CustomPipesModule } from 'src/app/core/custom-pipes/custom-pipes.module';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    PostsListComponent,
    ModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    CustomPipesModule,
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class PostsListModule { }
