import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private details:DetailsService,private router:Router){}

  ngOnInit(){
    this.details.about();
    }
   

}
