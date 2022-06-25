import { Component, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() nbPages: any = null;

  @Output() posts = new EventEmitter<any>();

  public pages: Array<number> = [];

  public page: number = 0;

  public size: number = 0;

  constructor(private ps: PostsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    const { nbPages } = changes;
    if( nbPages.previousValue !== nbPages.currentValue) {
      for (let i = nbPages.previousValue; i < nbPages.currentValue; i++) {
        this.pages.push(i);
      }
      this.size = nbPages.currentValue;
    }
    console.log(this.pages.length);
  }

  getPage(page: any) {
    this.ps.getPostPerPage(page).subscribe((res: any) => {
      this.posts.emit(res.hits);
    });
  }

}
