import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-column',
  templateUrl: './dynamic-column.component.html',
  styleUrls: ['./dynamic-column.component.scss']
})
export class DynamicColumnComponent implements OnInit {

  @Input() columns!: string[];

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.columns);
  }

}
