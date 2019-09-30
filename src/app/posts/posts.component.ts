import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post2Component } from '../post2/post2.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  alldata: any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {

    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
      console.log(data);
      this.alldata=data      
    })
  }
  show(a){
    localStorage.setItem("comments",JSON.stringify(a))
    this.router.navigate(["post2"])
  }
}