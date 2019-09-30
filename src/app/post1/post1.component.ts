import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {
  body;
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      console.log(data)
      this.body=data;
  })
  }
  p1(a){
    localStorage.setItem('post',JSON.stringify(a))
    this.router.navigateByUrl('comment')
  }

}
