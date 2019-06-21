import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideAnimals = true;
  hideColors = true;
  hideDays = true;

  animals = ["cat", "dog", "mouse"];
  colors = ["red", "green", "blue"];
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  changes(num)
  {
    this.hideAnimals = true;
    this.hideColors = true;
    this.hideDays = true;
    if (num == 1)
    {
      this.hideAnimals = false;
    }
    if(num == 2)
    {
      this.hideColors = false;
    }
    if(num == 3)
    {
      this.hideDays = false;
    }
  }

}
