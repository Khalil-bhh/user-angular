import {Component, OnInit} from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'amal';
  opened = true;
  userList: any ;
  overlayShow = false;
  newUser = {
    id: null,
    name: '',
    lastname: '',
    age: null
  };
  selectedUser = {
    id: 0,
    name: '',
    lastname: '',
    age: 0
  };
  constructor(private userService: UserService) {}
  ngOnInit(): void{
    this.userList = this.userService.getAll();
    this.selectedUser = this.userService.getById(1);
  }
  setSelectedUser(user: any): void {
    this.selectedUser = user;
    this.opened = true;
  }

  updateUser(): void{
    this.userService.update(this.selectedUser);
  }

  addUser(): void{
    this.userService.create(this.newUser);
    this.overlayShow = false;
  }
}
