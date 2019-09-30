import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup
  constructor(public http:HttpClient,public router:Router) {
    this.register=new FormGroup({
      emailid:new FormControl(),
      pass:new FormControl()
    })
   }
  ngOnInit() {
  }
func(data){
let body={
  email:data.emailid,
  password:data.pass
}
this.http.post('https://reqres.in/api/register',body).subscribe(data1=>{
  console.log("1",data1)
})
this.http.post('https://reqres.in/api/user',body).subscribe(data2=>{
  console.log("1",data2)
})
this.router.navigateByUrl('post')
}
}
