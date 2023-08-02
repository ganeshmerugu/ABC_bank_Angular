import { Component, OnInit } from '@angular/core';
import { Application } from '../application';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.scss']
})
export class ViewappComponent implements OnInit {

  applications: Application[] | undefined;

  constructor(private userService : UserService, private router:Router){}

  ngOnInit(): void {

    this.getApplications();
      
  }

  private getApplications(){
    this.userService.getApplicationsList().subscribe(data =>{
      this.applications = data;
    });
  }  

  // preview(applicationId:number){
  //   this.router.navigate(['preview', applicationId]);
  // }
}
