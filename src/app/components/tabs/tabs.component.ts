import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  public tab: any = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: any) {
    this.tab = tab === 1 ? 'all' : 'faves';
  }

}
