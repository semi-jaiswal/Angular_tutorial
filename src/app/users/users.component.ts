import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //userName : string = '';
  userList :Array<any>=[]; 
  constructor() { }

  ngOnInit(): void {
  }

  onUserAdded(event: string) {
    this.userList.push(event);
  }
}
