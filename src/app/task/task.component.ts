import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
task:FormGroup
  record;
  constructor(public http:HttpClient,public router:Router) {
    this.task=new FormGroup({
      userid:new FormControl(),
      id:new FormControl(),
      title:new FormControl(),
      completed:new FormControl
    })
   }
   task1(){
     this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
console.log(data)
this.record=data;

      })
     // this.router.navigateByUrl('todo')
   }

  ngOnInit() {
  }
}
