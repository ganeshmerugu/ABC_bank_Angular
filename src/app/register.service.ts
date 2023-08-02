import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User} from './user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseurl = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  registerUser(user:User) : Observable<any>{
    console.log(user);
     return this.httpClient.post<any>("http://localhost:8080/api/registration/register",user);
  }
  loginUser(user:User) : Observable<any>{
    console.log(user);
     return this.httpClient.post<any>("http://localhost:8080/api/auth/login",user);
  }
  

}
