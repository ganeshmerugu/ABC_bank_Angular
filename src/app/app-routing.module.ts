import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SuccessComponent } from './success/success.component';
import { AppstatusComponent } from './appstatus/appstatus.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'welcome',
    component: WelcomeComponent
  },
  {
    path:'viewapplications',
    component: ViewappComponent
  },
  {
    path:'userdetails',
    component: UserdetailsComponent
  },
  {
    path:'preview/:applicationId/:ssnNumber',
    component:AppstatusComponent
  },
  {
    path:'thankyou',
    component:SuccessComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'**',
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
