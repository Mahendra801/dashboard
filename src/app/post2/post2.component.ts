import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';


@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {
  data
  public fulldata:any
  commentdata = []

  constructor(private http: HttpClient, private router: Router) {
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(data => {
      console.log(data)
      this.fulldata=data
    })
   }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("data"))
    console.log(this.data)

   
    setTimeout(() => {
      this.comparingComments()
    }, 2000);
    
  }

  comparingComments(){
    for (var i = 0; i < this.fulldata.length; i++) {
      if (this.data.id == this.fulldata[i].postId) {
        this.commentdata.push(this.fulldata[i])
      }
    }
    console.log(this.commentdata)
  }


  
}
