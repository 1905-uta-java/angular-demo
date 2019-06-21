import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private userserv : UsersServiceService) { }

  ngOnInit() {
  }

  userData = null;

  getUserDataset()
  {
    this.userserv.getUsers().subscribe(dat => {
      this.userData = dat;
      console.log(this.userData[0]);
    })

  }
}
