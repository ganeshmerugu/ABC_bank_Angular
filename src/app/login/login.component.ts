import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : User = new User();
  constructor(private loginuserservice : RegisterService, private _router : Router) {}
  ngOnInit(): void {
    
  }  
  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data => {
      alert("login successfully");
      this._router.navigate(['/welcome']);
    },error => alert("please enter correct userName and password"));
  }
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
