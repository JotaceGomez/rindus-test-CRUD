import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [  
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('./features/posts-list/posts-list.module').then(
        (m) => m.PostsListModule
      ),
  },
  {
    path: 'posts/:id',
    canActivate: [],
    loadChildren: () =>
      import('./features/posts-detail/posts-detail.module').then(
        (m) => m.PostsDetailModule
      ),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
