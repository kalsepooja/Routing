import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId!: string;
  userObj ! : Iusers;
  uerInfoForm!: FormGroup

  constructor(
    private _route: ActivatedRoute,
    private _userService: UsersService
  ) { }

  ngOnInit(): void { 
    this.createForm()
    this.userId =  this._route.snapshot.params['userId'];
    this.userObj = this._userService.fetchUer(this.userId);
    // this.uerInfoForm.patchValue(this.userObj.userId)
    this.uerInfoForm.controls['userusername'].patchValue(this.userObj.userName)
   
    console.log(this.uerInfoForm.controls['userusername'].patchValue(this.userObj.userName));
    
    console.log(this.userObj);
    
  };

  createForm(){
    this.uerInfoForm = new FormGroup({
      userusername: new FormControl(null, [Validators.required])
    })
  }

}
