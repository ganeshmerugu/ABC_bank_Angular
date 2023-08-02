import { Component,OnInit } from '@angular/core';

import { Application } from '../application';

import { UserService } from '../user.service';

import { ActivatedRoute} from '@angular/router'

 

 

@Component({

  selector: 'app-appstatus',

  templateUrl: './appstatus.component.html',

  styleUrls: ['./appstatus.component.scss']

})

export class AppstatusComponent implements OnInit{

  step: any = 1;

  application : Application = new Application();

  applicationId:any ;
  ssnNumber:string = "";
 

 

  constructor(private userService : UserService,private route :ActivatedRoute){}

 

  ngOnInit(): void {

    this.applicationId=this.route.snapshot.params['applicationId'];
    this.ssnNumber=this.route.snapshot.params['ssnNumber'];
    this.getApplicationById();    

  }

 

  public getApplicationById(){

    this.userService.getApplicationById(this.applicationId,this.ssnNumber).subscribe(data =>{

      this.application = data;

      console.log(data);

    }, err => console.log(err));

  }

 

  next() {

    this.step = this.step + 1;

  }

 

  previous() {

    this.step = this.step - 1;

  }

 

}

 