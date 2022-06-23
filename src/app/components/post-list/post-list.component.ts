import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: Array<any> = [];
  public nbPages: number = 0;


  constructor( private ps: PostsService) { }

  ngOnInit(): void {
    this.ps.getPostList().subscribe((res: any)=>{
      const { hits, nbPages } = res;
      this.setPosts(hits);
      this.nbPages = nbPages;
    });
  }

  replacePosts(posts: any) {
    console.log(posts);
    this.setPosts(posts);
  }

  setPosts(posts: any) {
    posts.forEach((hit: any, index: number) => {
      const { story_title, author, story_url, created_at } = hit;
      console.log(story_title, author, story_url, created_at);
      if (story_title === null || author === null || story_url === null || created_at === null ){
        posts.splice(index, 1);
      }
    });
    // if (hits.length < 8)
    this.posts = posts;
    console.log(this.posts);
  }

  filter(data: any) {
    console.log(data, 'aqui');
    const { hits, nbPages } = data;
    this.setPosts(hits);
    this.nbPages = nbPages;
  }

}
