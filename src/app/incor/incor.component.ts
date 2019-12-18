import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incor',
  templateUrl: './incor.component.html',
  styleUrls: ['./incor.component.css']
})
export class IncorComponent implements OnInit {
  incor:any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
      //console.log(data);
      this.incor=data;
      for(var i=0;i<=this.incor.length; i++);
      console.log(this.incor);
    })
  }
}
