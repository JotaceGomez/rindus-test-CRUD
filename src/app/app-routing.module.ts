import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './features/posts-list/components/posts-list/posts-list.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    component: PostsListComponent
  },
  {
    path: 'blogs',
    canActivate: [],
    loadChildren: () =>
      import('./features/posts-list/posts-list.module').then(
        (m) => m.PostsListModule
      ),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
