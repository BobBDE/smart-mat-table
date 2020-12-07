import {Component} from '@angular/core';
import {UserDataSource} from '../model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  datasource = new UserDataSource();

  simpleUsersColumns: string[] = ['firstname', 'lastname', 'mail', 'job'];

  simpleUsersColumns2: string[] = ['job', 'lastname', 'mail'];
  usersColumnsWithDelete: string[] = [...this.simpleUsersColumns, 'customTemplate'];
}
