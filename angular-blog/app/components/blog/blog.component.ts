import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  public postList: Array<Post> = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.posts.subscribe(posts => {
      this.postList = posts;
    });
  }

}
