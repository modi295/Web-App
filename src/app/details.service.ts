import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  url='http://localhost:3000/register';
  constructor(private http:HttpClient) { }
  saveDetailsData(data:any){
    console.log(data);
    return this.http.post(this.url, data);

  }
  checkData(data:any){
    return this.http.get(this.url);

  }

}
