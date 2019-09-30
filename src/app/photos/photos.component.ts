import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any;
  albums: any;
  new=[];

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
     this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
    console.log(data)
    this.photos=data
     
    })
    this.albums=JSON.parse(localStorage.getItem("albumsdata"))
  

  setTimeout(() => {
    this.comparingComments()
  }, 8000);
}


comparingComments() {
  for (var i = 0; i < this.photos.length; i++) {
    if (this.albums.id == this.photos[i].albumId) {
      this.new.push(this.photos[i])
    }
  }
  console.log(this.new)
}
 save(a){
   localStorage.setItem("data",JSON.stringify(a))
   this.router.navigate(['photo2'])
 } 
  

 
}
