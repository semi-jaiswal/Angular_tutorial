import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName : any;
  @Output() userAdded = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdded(){
    this.userAdded.emit(this.userName);
  }
}
