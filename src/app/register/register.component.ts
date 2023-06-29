import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { DetailsService } from '../details.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private details:DetailsService, private route:Router,private http:HttpClient){}

registerForm=new FormGroup({
  user: new FormControl('',Validators.required),
  name: new FormControl('',Validators.required),
  email: new FormControl('',[Validators.required,Validators.email]),
  phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
})
registerUser(){
  this.details.saveDetailsData(this.registerForm.value).subscribe((result)=>{
    
    console.log(result)
    this.registerForm.reset();
    this.route.navigate(['login']);
  }
  );
  window.alert("registered sucessfully")
}
get user(){
  return this.registerForm.get('user')
}
get name(){
  return this.registerForm.get('name')
}
get email(){
  return this.registerForm.get('email')
}
get phone(){
  return this.registerForm.get('phone')
}
get password(){
  return this.registerForm.get('password')
}
}
