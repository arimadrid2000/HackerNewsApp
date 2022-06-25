import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterData = new EventEmitter<any>();

  techSelected = new FormControl('');

  public techList: Array<any> = [
    {label: 'Angular',name: 'angular', image: '../assets/icons/angular.png'},
    {label: 'React',name: 'reactjs', image: '../assets/icons/react.png'},
    {label: 'Vue',name: 'vuejs', image: '../assets/icons/vue.png'},
  ];

  constructor(private ps: PostsService) { }

  ngOnInit(): void {
  }

  onChange($event: any) {
    this.ps.filterPost($event.value).subscribe((resp: any) => {
      this.filterData.emit(resp);
    });
  }
}
