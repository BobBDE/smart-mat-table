import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';

export interface User {
  firstname: string;
  lastname: string;
  mail: string;
  job: string;
}

const users: User[] = [
  {firstname: 'James', lastname: 'Bond', mail: 'james.bond@fake-email.com', job: 'Secret agent'},
  {firstname: 'John', lastname: 'Wick', mail: 'john.wick@fake-email.com', job: 'Killer'},
  {firstname: 'Ethan', lastname: 'Hunt', mail: 'ethan.hunt@fake-email.com', job: 'Secret agent'},
  {firstname: 'Robert ', lastname: 'McCall ', mail: 'robert.mccall@fake-email.com', job: 'US Marine'},
  ];


export class UserDataSource extends DataSource<User> {
  connect(collectionViewer: CollectionViewer): Observable<User[] | ReadonlyArray<User>> {
    return of(users.slice());
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
