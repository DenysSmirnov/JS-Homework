import { Injectable } from '@angular/core';
import { Post } from '../models/post';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

@Injectable()
export class PostService {
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

  constructor() { }

  // public getPosts(): Observable <Post[]> {
  //   return of(this.postList);
  // }
   public getPosts(): Array<Post> {
    return this.postList;
  }

  public getSinglePost(id: number): Post {
    return this.postList.filter(post => post.id === id).pop();
  }

  public getCategory(category: string): Post {
    return this.postList.filter(post => post.category === category).pop();
  }
}
