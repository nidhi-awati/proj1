import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comp=[]
data:any;
tdata:any;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('post'))
    console.log(this.data)
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data=>{
      console.log(data)
      this.tdata=data
    })
    setTimeout(()=>{
      this.go();
    },2000)
    }
    go(){
      for(var i=0;i<this.tdata.length;i++){
        if(this.data.id==this.tdata[i].postId){
          this.comp.push(this.tdata[i])
        }
      }
      console.log(this.comp)
    }
  }

