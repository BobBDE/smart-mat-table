import {Component, OnInit} from '@angular/core';
import {TableAbstractDirective} from '../table-abstract.directive';
import {User} from '../../model/user';

@Component({
  selector: 'app-table-with-dynamic-columns',
  templateUrl: './table-with-dynamic-columns.component.html',
  styleUrls: ['./table-with-dynamic-columns.component.scss']
})
export class TableWithDynamicColumnsComponent extends TableAbstractDirective<User> implements OnInit {

  constructor() {
    // only the job and mail columns are defined (to do a specific style for the job and a link to the mail),
    // the other columns are dynamically generated without any style
    super(['job', 'mail']);
  }

  ngOnInit(): void {
  }

}
