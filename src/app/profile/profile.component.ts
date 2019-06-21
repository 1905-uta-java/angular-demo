import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    username: 'username_default',
    email: 'email@default.com'
  }
  isHidden = true;
  hide = "Hide";
  show = "Show";
  showcontent = this.show;

  clk()
  {
    this.isHidden = !this.isHidden;
    if(this.showcontent==this.show) this.showcontent = this.hide;
    else this.showcontent = this.show;
  }
}
