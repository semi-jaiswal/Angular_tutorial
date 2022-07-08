import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName : string = '';
  userList :Array<any>=[]; 
  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded() {
    this.userList.push(this.userName);
  }
}
