import {Injectable} from '@angular/core';
import users from '../users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: {id: number, name: string, lastname: string, age: number }[] = users;
  constructor() { }
  getAll(): any{
    return this.userList;
  }
  getById(id: number): any{
    const index = this.userList.findIndex(user => {
      return user.id === id;
    });
    console.log(index);
    return this.userList[index];
  }
  create(newUser): void{
    let lastId = this.userList[this.userList.length-1].id;
    newUser.id = lastId++;
    this.userList.push(newUser);
    console.log(this.userList);
  }
  update(user): void{
    const index = this.userList.findIndex( u => {
      return u.id === user.id;
    });
    this.userList[index] = user;
  }
  delete(id: number): void{
    const index = this.userList.findIndex( u => {
      return u.id === id;
    });
    this.userList.splice(index, 1);
  }
}
