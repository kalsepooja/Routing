import { Injectable } from '@angular/core';
import { Iusers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArray : Array<Iusers> = [
    {
      userName: 'jen',
      userId: '1'
    },
    {
      userName: 'jhon',
      userId: '2'
    },
    {
      userName: 'jeny',
      userId: '3'
    },
    {
      userName: 'june',
      userId: '4'
    }
  ]

  constructor() { }

  fetchAllUsers(): Iusers[]{
    return this.userArray 
  };

  fetchUer(id: string):Iusers{
return this.userArray.find(user => user.userId === id) as Iusers
 }
}
