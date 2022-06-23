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

  // toppings = new FormControl('');

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  techSelected = new FormControl('');

  public techList: string[] = ['angular', 'reactjs', 'vuejs'];

  constructor(private ps: PostsService) { }

  ngOnInit(): void {
  }

  onChange($event: any) {
    console.log('console', $event.value);
    this.ps.filterPost($event.value).subscribe((resp: any) => {
      console.log(resp, 'filtro');
      this.filterData.emit(resp);
    });
  }
}
