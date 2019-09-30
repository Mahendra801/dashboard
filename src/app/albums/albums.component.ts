import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumsdata: Object;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data=>{
      console.log(data)
      this.albumsdata=data
      
    })
    
  }
  albums(values){
    this.router.navigate(["photos"])
    localStorage.setItem("albumsdata",JSON.stringify(values))
    
  }

}
