import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public apiUrl = 'http://hn.algolia.com/api/v1/search_by_date';

  constructor( private http: HttpClient) { }

  getPostList() {
    return this.http.get(`${this.apiUrl}?page=0`);
  }

  getPostPerPage(page: number) {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }
}
