import { TestBed } from '@angular/core/testing';

import { PostsDetailService } from './posts-detail.service';

describe('PostsDetailService', () => {
  let service: PostsDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
