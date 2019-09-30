import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newthing',
  templateUrl: './newthing.component.html',
  styleUrls: ['./newthing.component.css']
})
export class NewthingComponent implements OnInit {
  song: any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get('https://jvapi.peelpress.com/news').subscribe(data=>{
      console.log(data)
      this.song=data['news']
    })
  }

}
