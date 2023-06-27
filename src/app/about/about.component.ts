import { Component } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private detailsServices:DetailsService){}

  ngOnInit(){
    this.detailsServices.about();
  }
}
