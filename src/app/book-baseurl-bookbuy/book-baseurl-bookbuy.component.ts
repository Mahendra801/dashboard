import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-baseurl-bookbuy',
  templateUrl: './book-baseurl-bookbuy.component.html',
  styleUrls: ['./book-baseurl-bookbuy.component.css']
})
export class BookBaseurlBookbuyComponent implements OnInit {
  baseurl: FormGroup;

  constructor(private http:HttpClient, private router:Router) { 
    this.baseurl=new FormGroup({
      id:new FormControl(),
      user_id:new FormControl(),
    })
  }
  submit(data){
    let body ={
      id:data.value.id,
      user_id:data.value.user_id
    }
    console.log(body)
    this.http.post("{{baseUrl}}/book/buy",body).subscribe(data =>{
      console.log(data)
    })
  }

  ngOnInit() {
  }

}
