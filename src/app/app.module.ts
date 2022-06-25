import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterComponent } from './components/filter/filter.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PaginatorComponent,
    FilterComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MdbTabsModule,
    MdbCheckboxModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
