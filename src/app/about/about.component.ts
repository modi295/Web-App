import { Component } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private details:DetailsService,private router:Router){}

  ngOnInit(){
    this.details.about();
    }
   

}
