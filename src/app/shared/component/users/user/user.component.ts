import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId ! : string;
  userObj ! : Iusers
  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params);
    this.userId = this._route.snapshot.params['userId']
    console.log(this.userId);
   this.userObj = this._userService.fetchUer(this.userId)
  }

}
