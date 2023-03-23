import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Title {
  rendered: string;
}
export interface Article {
  title: Title;
  id: number;
  content: Title;
  rendered: string;
  date: Date;
  author: string;
}
export interface Podcasts {
  id: number;
  title: Title;
  content: Title;
  author: string;
  date: Date;
}

export interface User {
  id: number;
  name: string;
  description: string;
  user_image: boolean;
  link: string;
}

export interface Search {
  id: number;
  title: Title;
  subtype: string;
  image: string;
}
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) {}

  getArticle(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(
      `${environment.apiUrl}/wp/v2/article/`
    );
  }

  // getPodcast():Observable<Podcasts[]>{
  //     return this.httpClient.get<Podcasts[]>(
  //         `${environment.apiUrl}/wp/v2/podcast/`
  //     )
  //  }

  // getProducers():Observable<User[]>{
  //     return this.httpClient.get<User[]>(
  //         `${environment.apiUrl}/wp/v2/users/`
  //     )
  // }

  getArticleDetail(id: number): Observable<Article> {
    return this.httpClient.get<Article>(
      `${environment.apiUrl}/wp/v2/article/${id}`
    );
  }
  // getPodcastDetail(id:number):Observable<Podcasts>{
  //     return this.httpClient.get<Podcasts>(
  //       `${environment.apiUrl}/wp/v2/podcast/${id}`
  //     )
  // }

  // getProducerDetail(id:number):Observable<User>{
  //     return this.httpClient.get<User>(
  //        `${environment.apiUrl}/wp/v2/users/${id}`
  //     )
  // }

  search(value: string): Observable<Search[]> {
    return this.httpClient.get<Search[]>(
      `${environment.apiUrl}/wp/v2/search/?per_page=10&page=1&type=post&subtype=article,podcast,ondemand&search=${value}&per_page=10&page=1`
    );
  }
}
