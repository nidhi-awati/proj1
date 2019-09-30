import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image;

  constructor(public http:HttpClient,public route:Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      console.log(data)
      this.image=data;
  })
  }
  photo(a)
  {
    console.log(a)
    localStorage.setItem("photo",JSON.stringify(a))
    this.route.navigateByUrl('nail')
  }
}
