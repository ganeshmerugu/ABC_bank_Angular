import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Application } from './application';



@Injectable({

  providedIn: 'root',

})

export class UserService {

  private baseUrl = '';

  constructor(private httpClient: HttpClient) { }



  getApplicationsList(): Observable<Application[]> {

    return this.httpClient.get<Application[]>(

      'http://localhost:8080/loanApplicationForm/viewAllApplications'

    );

  }

  postApplicationsList(application: Application): Observable<Object> {

    return this.httpClient.post(

      'http://localhost:8080/loanApplicationForm',

      application

    );

  }



  getApplicationById(applicationId: any, ssnNumber: string): Observable<Application> {

 

    return this.httpClient.get<Application>(`http://localhost:8080/loanApplicationForm/viewApplications?applicationId=${applicationId}&ssnNumber=${ssnNumber}`);
    

  }

}

