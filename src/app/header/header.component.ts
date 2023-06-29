import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private details:DetailsService, private router:Router){}
  log():boolean{
    if(this.details.isLoggedIn()){
      return true;

    }else{
    return false;
    }
  }
  logOut(){
    this.details.signout();
    this.router.navigate(['login'])

 }
}
