import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../application';
import { UserService } from '../user.service';

//import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent implements OnInit {

  user: Application = new Application();
  
  

  step: any = 1;

  multistep = new FormGroup({
      fName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+'),
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      mName: new FormControl('', [Validators.maxLength(255),Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      marital: new FormControl('', [Validators.required]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
      ]),
      dob: new FormControl('', [Validators.required]),
      ssn: new FormControl('', [Validators.required,Validators.pattern('[0-9][0-9]+')]),
      purpose: new FormControl('', [Validators.required]),
      desc: new FormControl(''),
   
      addLine1: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      addLine2: new FormControl('', [Validators.maxLength(255)]),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+'),
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      postal: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
      home: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      office: new FormControl('', [
        Validators.pattern('[0-9][0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
  
      eName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      month: new FormControl('',[Validators.required,Validators.pattern('[0-9][0-9]+')]),
      year: new FormControl('',[Validators.required,Validators.pattern('[0-9][0-9]+')]),
      salary: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
      ]),
      designation: new FormControl('', [Validators.maxLength(255)]),
      offaddl1: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      offaddl2: new FormControl('', [Validators.maxLength(255)]),
      offcity: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      offstate: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('[a-zA-Z][a-zA-Z]+')
      ]),
      offpostal: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][0-9]+'),
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
  });

  
  constructor(private route: Router,private userservice: UserService) {}

  

  ngOnInit(): void {}

  saveApplication(){
    this.userservice.postApplicationsList(this.user).subscribe(data => {
      console.log(data);
      this.nextPage();
    }, err => {
      console.log(err);
      alert("Failed to submit application");
      this.route.navigate(['/welcome']);
    });
  }

  nextPage(){
    this.route.navigate(['/thankyou']);
  }

  submit(){
    this.step = this.step + 1;
    if (this.step == 4) {
      if((this.user.annualSalary<10000) || (this.user.workExperienceYear==0 && this.user.workExperienceMonth<6) || (this.ageFromDateOfBirthday(this.user.dateOfBirth)<18 || this.ageFromDateOfBirthday(this.user.dateOfBirth)>65)){
           alert("Sorry! You are ineligible for applying for loan Application.");
           this.route.navigate(['/welcome']);
      }
      else{
        this.saveApplication();
        console.log(this.user);
      }
            
    }
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number{
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  

  previous() {
    this.step = this.step - 1;
  }


  get FName(): FormControl {
    return this.multistep.get('fName') as FormControl;
  }

  get MName(): FormControl {
    return this.multistep.get('mName') as FormControl;
  }

  get LName(): FormControl {
    return this.multistep.get('lName') as FormControl;
  }

  get Marital(): FormControl{
    return this.multistep.get('marital') as FormControl;
  }

  get Amount(): FormControl{
    return this.multistep.get('amount') as FormControl;
  }

  get dob(): FormControl{
    return this.multistep.get('dob') as FormControl;
  }

  get ssn(): FormControl{
    return this.multistep.get('ssn') as FormControl;
  }

  get Purpose(): FormControl{
    return this.multistep.get('purpose') as FormControl;
  }

  get AddLine1(): FormControl{
    return this.multistep.get('addLine1') as FormControl;
  }

  get AddLine2(): FormControl{
    return this.multistep.get('addLine2') as FormControl;
  }

  get City(): FormControl{
    return this.multistep.get('city') as FormControl;
  }

  get State(): FormControl{
    return this.multistep.get('state') as FormControl;
  }

  get Postal(): FormControl{
    return this.multistep.get('postal') as FormControl;
  }

  get Home(): FormControl{
    return this.multistep.get('home') as FormControl;
  }

  get Mobile(): FormControl{
    return this.multistep.get('mobile') as FormControl;
  }

  get Office(): FormControl{
    return this.multistep.get('office') as FormControl;
  }

  get Email(): FormControl{
    return this.multistep.get('email') as FormControl;
  }

  get EName(): FormControl{
    return this.multistep.get('eName') as FormControl;
  }

  get Salary(): FormControl{
    return this.multistep.get('salary') as FormControl;
  }

  get year(): FormControl{
    return this.multistep.get('year') as FormControl;
  }

  get month(): FormControl{
    return this.multistep.get('month') as FormControl;
  }

  get Designation(): FormControl{
    return this.multistep.get('designation') as FormControl;
  }

  get OffAddl1(): FormControl{
    return this.multistep.get('offaddl1') as FormControl;
  }

  get OffAddl2(): FormControl{
    return this.multistep.get('offaddl2') as FormControl;
  }

  get Offcity(): FormControl{
    return this.multistep.get('offcity') as FormControl;
  }

  get Offstate(): FormControl{
    return this.multistep.get('offstate') as FormControl;
  }

  get Offpostal(): FormControl{
    return this.multistep.get('offpostal') as FormControl;
  }
}
