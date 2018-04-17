import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/blog/post-detail/post-detail.component';
import { PostPreviewCategoryComponent } from './components/blog/post-preview-category/post-preview-category.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'category/:slug', component: PostPreviewCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
