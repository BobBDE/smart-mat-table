import {Component, Input, OnInit} from '@angular/core';
import {UserDataSource} from '../../model/user';

@Component({
  selector: 'app-simple-users-table',
  templateUrl: './simple-users-table.component.html',
  styleUrls: ['./simple-users-table.component.scss']
})
export class SimpleUsersTableComponent implements OnInit {

  @Input() datasource!: UserDataSource;

  @Input() columns!: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
