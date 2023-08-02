import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',

  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private registerService : RegisterService,private _router : Router) {}

  ngOnInit(): void {
    
  }

  signupSubmitted() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data => {
      alert("user successfully registered");
      this._router.navigate(['/login']);
    },error=> alert("sorry user not registered"));
    
  }

  signupForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,

      Validators.maxLength(255),

      Validators.pattern('[a-zA-Z][a-zA-Z]+'),
    ]),

    lastName: new FormControl('', [
      Validators.required,

      Validators.maxLength(255),

      Validators.pattern('[a-zA-Z][a-zA-Z]+'),
    ]),

    emailId: new FormControl('', [Validators.required, Validators.email]),

    phoneNumber: new FormControl('', [
      Validators.required,

      Validators.pattern('[0-9][0-9]+'),

      Validators.minLength(10),

      Validators.maxLength(10),
    ]),

    userName: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required]),
  });

  

  get firstName(): FormControl {
    return this.signupForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signupForm.get('lastName') as FormControl;
  }

  get emailId(): FormControl {
    return this.signupForm.get('emailId') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.signupForm.get('phoneNumber') as FormControl;
  }

  get userName(): FormControl {
    return this.signupForm.get('userName') as FormControl;
  }

  get Password(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }
}
