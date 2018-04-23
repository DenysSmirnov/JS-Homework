import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PostService {
  public posts: Observable<Post[]>;
  private postList: Array<Post> = [
    new Post(
      'Some title',
      '19 июня 2017 в 12:20',
      'https://cdn.tproger.ru/wp-content/uploads/2017/06/javascriptmini2.png',
      `Веб-разработка — одно из самых простых и оттого популярных направлений среди начинающих программистов. Для работы достаточно любого текстового редактора и браузера`,
      'Web'),
    new Post(
      'Some title 2',
      '19 июня 2017 в 12:20',
      'https://cdn.tproger.ru/wp-content/uploads/2017/06/javascriptmini2.png',
      `Веб-разработка — одно из самых простых и оттого популярных направлений среди начинающих программистов. Для работы достаточно любого текстового редактора и браузера`,
      'Начинающим'),
    new Post(
      'Some title 3',
      '19 июня 2017 в 12:20',
      'https://cdn.tproger.ru/wp-content/uploads/2017/06/javascriptmini2.png',
      `Веб-разработка — одно из самых простых и оттого популярных направлений среди начинающих программистов. Для работы достаточно любого текстового редактора и браузера`,
      'Web'),
    new Post(
      'Some title 4',
      '19 июня 2017 в 12:20',
      'https://cdn.tproger.ru/wp-content/uploads/2017/06/javascriptmini2.png',
      `Веб-разработка — одно из самых простых и оттого популярных направлений среди начинающих программистов. Для работы достаточно любого текстового редактора и браузера`,
      'Алгоритмы')
  ];

  constructor() {
    this.posts = Observable.create((observer) => {
      setTimeout(() => {
        observer.next(this.postList);
      }, 2000);
    });
  }

  public getPosts(): Observable<Post[]> {
    return of(this.postList);
  }

  public getSinglePost(id: number): Observable<Post> {
    const singlePost = this.postList.filter(post => post.id === id).pop();
    return of(singlePost);
  }

  public getCategory(category: string): Observable<Post> {
    const categoryPost = this.postList.filter(post => post.category === category).pop();
    return of(categoryPost);
  }
}
