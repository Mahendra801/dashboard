import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
public book
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get('https://jvapi.peelpress.com/news').subscribe(data=>{
      console.log(data)
      this.book=data['news']
    })
  }
  senddata(data){
    localStorage.setItem("book",JSON.stringify(data))
    this.router.navigate(['library2'])
  }

}
