import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './capitalize-first.pipe';
import { FilterPostsPipe } from './filter-posts/filter-posts.pipe';

@NgModule({
  declarations: [CapitalizeFirstPipe, FilterPostsPipe],
  imports: [
    CommonModule,
  ],
  exports: [CapitalizeFirstPipe, FilterPostsPipe]
})
export class CustomPipesModule { }
