import { Component, Input, OnInit } from '@angular/core';
import { matSelectAnimations } from '@angular/material/select';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() tab: any = '';

  public posts: Array<any> = []; //declaration of the posts array
  public nbPages: number = 0; //variable for paginator
  public faves: Array<any> = [];


  constructor( private ps: PostsService) { }

  ngOnInit(): void {
    this.verifyTab(this.tab);
  }

  getAllpost() {
    //call to services to get all posts
    this.ps.getPostList().subscribe((res: any)=>{
      const { hits, nbPages } = res;
      this.setPosts(hits);
      this.nbPages = nbPages;
    });
  }

  verifyTab(tab: any) {
    if (tab === 'faves') {
      if (this.faves.length > 0) {
        this.posts = this.faves;
      } else {
        this.posts = [];
      }
    } else {
      this.getAllpost();
    }
  }

  ngOnChanges(changes: any) {
    const { tab } = changes;
    this.verifyTab(tab.currentValue);
  }

  //function to set posts when page is change
  replacePosts(posts: any) {
    this.setPosts(posts);
  }

  //function to validate posts data and set only that with condition on the task
  setPosts(posts: any) {
    let today = new Date();
    posts.forEach((post: any)=> {
      let date = post.created_at;
      date = new Date(date);
      let diff = today.valueOf() - date.valueOf();
      diff = diff/1000/60/60;
      diff = Math.floor(diff);
      post.time = diff;
      post.fav = post.fav || false;
    });

    posts = posts.filter(
      (post: any) => 
      post.story_title && 
      post.author && 
      post.story_url && 
      post.created_at
    );
    this.posts = this.tab === 'all' ? posts : this.faves;
  }

  //function to filter data by tech
  filter(data: any) {
    const { hits, nbPages } = data;
    this.setPosts(hits);
    this.nbPages = nbPages;
  }

  //function to open post url in a new tab
  goTo(url: any) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: url,
    }).click();
  }

  setFav(index: number) {
    const el = this.posts.find((post: any, i: number)=> i === index);
    if (el) el.fav = !el.fav ;
    if (el.fav === true) this.faves.push(el) || this.faves.filter((item)=> item !== el);
  }

}
