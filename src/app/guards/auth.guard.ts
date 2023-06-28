import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsService } from '../details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private details:DetailsService, private router:Router){

  }
  canActivate():boolean{
    if(this.details.isLoggedIn()){
      return true;

    }else{
    this.router.navigate(['login'])
    return false;
    }
  }
  
}
