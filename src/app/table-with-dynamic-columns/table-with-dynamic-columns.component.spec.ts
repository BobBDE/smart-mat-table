import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithDynamicColumnsComponent } from './table-with-dynamic-columns.component';

describe('TableWithDynamicColumnsComponent', () => {
  let component: TableWithDynamicColumnsComponent;
  let fixture: ComponentFixture<TableWithDynamicColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithDynamicColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithDynamicColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
