import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postService.getSinglePost(+params.id).subscribe((post: Post) => {
        this.post = post;
      });
    });
  }

}
