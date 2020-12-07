import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicColumnComponent } from './dynamic-column.component';

describe('DynamicColumnComponent', () => {
  let component: DynamicColumnComponent;
  let fixture: ComponentFixture<DynamicColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
