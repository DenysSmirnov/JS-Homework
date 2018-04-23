import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post-preview-category',
  templateUrl: './post-preview-category.component.html',
  styleUrls: ['./post-preview-category.component.scss']
})
export class PostPreviewCategoryComponent implements OnInit {
  public post: Post;
  public postList: Array<Post> = [];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.postService.getCategory(params.category).subscribe(posts => {
        // this.postList = posts;
        this.post = posts;
      });
    });
  }

}
