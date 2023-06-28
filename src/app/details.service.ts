import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  url='http://localhost:4000/';
  constructor(private http:HttpClient) { }
  saveDetailsData(data:any){
    return this.http.post(this.url+'reg', data);

  }
  checkData(data:any){
    return this.http.get(this.url+'reg');

  }
  saveLoginData(data:any){
    return this.http.post(this.url+'login',data);
  }

  about(){
    let headers = new HttpHeaders()
    .set("Authorization",`bearer ${localStorage.getItem('token')}`)
    return this.http.post(this.url+'about',{},{headers}).subscribe((result:any)=>{

    })
  }
  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('token');

  }
  signout(){
    localStorage.clear();
    
  }
}