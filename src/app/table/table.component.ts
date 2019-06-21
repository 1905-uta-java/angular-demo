import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataset = [{first:"Wolfe",last:"Magnus",email:"wsm@efoe.com",birth:new Date("01-08-97")},
  {first:"guy",last:"standard",email:"guys@gmail.com",birth:new Date("01-01-1990")}]

  bootstrapHide = true;
  swapTables()
  {
    this.bootstrapHide = !this.bootstrapHide;
  }
}
