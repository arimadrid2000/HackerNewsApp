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
      console.log(res);
      const { hits, nbPages } = res;
      this.setPosts(hits);
      this.nbPages = nbPages;
      console.log(hits);
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
    });
    // if (hits.length < 8)
    this.posts = posts;
  }

}
