import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users ! : Iusers[]
  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.users = this._userService.fetchAllUsers()
  }

}
