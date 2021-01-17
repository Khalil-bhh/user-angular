import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from '../service/user.service';




@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user;
  @Output() userEmitter = new EventEmitter();
  @Output() cleanEmitter = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  deleteUser(): void{
    this.userService.delete(this.user.id);
  }
  updateAge(): void{
    this.userService.update(this.user);
  }
  emitUser(): void{
    this.userEmitter.emit(this.user);
  }
  emitClean(): void{
    this.cleanEmitter.emit({id: 0, name: '', lastname: '', age: 0});
  }

}
