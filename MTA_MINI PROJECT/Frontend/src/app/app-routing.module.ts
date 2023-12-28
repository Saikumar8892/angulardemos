import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent},
  {path:"userHome",component:UserdashboardComponent},
  {path:"signUp", component:SignupComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
