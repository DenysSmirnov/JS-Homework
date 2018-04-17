import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatFormFieldModule, MatInputModule, NativeDateModule, MAT_DATE_FORMATS } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { PostDetailComponent } from './components/blog/post-detail/post-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostPreviewComponent } from './components/blog/post-preview/post-preview.component';
import { PostService } from './services/post.service';
import { PostPreviewCategoryComponent } from './components/blog/post-preview-category/post-preview-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MY_DATE_FORMATS = {
   parse: {
       dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
   },
   display: {
       dateInput: 'input',
       monthYearLabel: {year: 'numeric', month: 'short'},
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'},
   }
};

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostDetailComponent,
    HeaderComponent,
    FooterComponent,
    PostPreviewComponent,
    PostPreviewCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    NativeDateModule
  ],
  providers: [
    PostService,
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
