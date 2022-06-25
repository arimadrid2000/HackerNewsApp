import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  //url to connect with hn api
  public apiUrl = 'http://hn.algolia.com/api/v1/search_by_date';

  constructor( private http: HttpClient) { }

  //function to return all posts in the api
  getPostList() {
    return this.http.get(`${this.apiUrl}?page=0`);
  }

  //function to return posts per pages
  getPostPerPage(page: number) {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  //function to filter posts by tech(angular, react and vue)
  filterPost(tech: string) {
    return this.http.get(`${this.apiUrl}?query=${tech}&page=0`);
  }
}
