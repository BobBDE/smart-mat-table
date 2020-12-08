import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { SimpleUsersTableComponent } from './simple-users-table/simple-users-table.component';
import { TableWithDynamicColumnsComponent } from './table-with-dynamic-columns/table-with-dynamic-columns.component';
import { TableWithInjectableColumnComponent } from './table-with-injectable-column/table-with-injectable-column.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SimpleUsersTableComponent,
    TableWithDynamicColumnsComponent,
    TableWithInjectableColumnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
