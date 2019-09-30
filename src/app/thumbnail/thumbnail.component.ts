import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  photoimg: any;

  constructor() { }

  ngOnInit() {
this.photoimg=JSON.parse(localStorage.getItem('photo'))
console.log(this.photoimg)
  }
}
