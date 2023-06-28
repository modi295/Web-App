import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
   path:'login',
  component: LoginComponent
  },
  {
    path:'register',
   component: RegisterComponent
   },
   {
    path:'about',
    canActivate:[AuthGuard],
    component: AboutComponent
   },
   {
    path:'',
   component: HomeComponent
   },
   {
    path:'login/register',
    component: RegisterComponent
   },
   {
    path:'register/login',
    component: LoginComponent
   }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
