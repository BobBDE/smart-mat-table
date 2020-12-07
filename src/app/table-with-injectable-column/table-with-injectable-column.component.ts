import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {User, UserDataSource} from '../../model/user';

export interface ViewContext<T>{
  $implicit: T;
}

@Component({
  selector: 'app-table-with-injectable-column',
  templateUrl: './table-with-injectable-column.component.html',
  styleUrls: ['./table-with-injectable-column.component.scss']
})
export class TableWithInjectableColumnComponent implements OnInit {

  @Input() datasource!: UserDataSource;

  @Input() columns!: string[];


  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;


  constructor() {
  }

  ngOnInit(): void {
  }


  getUserViewContext(user: User): ViewContext<User> {
    return {$implicit: user};
  }

}
