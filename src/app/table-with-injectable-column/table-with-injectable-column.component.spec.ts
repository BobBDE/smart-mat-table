import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithInjectableColumnComponent } from './table-with-injectable-column.component';

describe('TableWithInjectableColumnComponent', () => {
  let component: TableWithInjectableColumnComponent;
  let fixture: ComponentFixture<TableWithInjectableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithInjectableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithInjectableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
