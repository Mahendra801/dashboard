import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book-to-store',
  templateUrl: './add-book-to-store.component.html',
  styleUrls: ['./add-book-to-store.component.css']
})
export class AddBookToStoreComponent implements OnInit {
  add: FormGroup;

  constructor( private http:HttpClient,private router:Router) {
    this.add=new FormGroup({
      title:new FormControl(),
      description:new FormControl(),
      price:new FormControl(),
      book_url:new FormControl(),
      email:new FormControl(),
      address:new FormControl(),
      name:new FormControl(),
    })
   }
   addtobookstore(data){
     let body={
      title: data.value.title,
      description: data.value.description,
      price: data.value.price,
      book_url: data.value.book_url,
      email: data.value.email,
      address: data.value.address,
      name: data.value.name,
     }
     console.log(body);
     this.http.post("http://localhost:3000/book/store",body).subscribe(data =>{
       console.log(data)
     });
    }

  ngOnInit() {
  }

}
