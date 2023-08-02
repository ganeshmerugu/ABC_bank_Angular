import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SuccessComponent } from './success/success.component';
import { AppstatusComponent } from './appstatus/appstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    FooterComponent,
    SignupComponent,
    ViewappComponent,
    WelcomeComponent,
    UserdetailsComponent,
    SuccessComponent,
    AppstatusComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // information about all components that will be created
