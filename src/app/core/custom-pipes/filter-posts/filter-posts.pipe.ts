import { Pipe, PipeTransform } from '@angular/core';
import { PostItem } from 'src/app/features/posts-list/models/post-item.model';

@Pipe({
  name: 'filterPosts'
})
export class FilterPostsPipe implements PipeTransform {
  transform(posts: PostItem[], searchTerm: string): PostItem[] {
    if (!posts || !searchTerm) {
      return posts;
    }

    searchTerm = searchTerm.toLowerCase();

    return posts.filter(post => {
      return post.title.toLowerCase().includes(searchTerm);
    });
  }
}
