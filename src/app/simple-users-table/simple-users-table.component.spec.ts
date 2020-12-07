import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleUsersTableComponent } from './simple-users-table.component';

describe('SimpleUsersTableComponent', () => {
  let component: SimpleUsersTableComponent;
  let fixture: ComponentFixture<SimpleUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
