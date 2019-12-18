import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-purchase-history',
  templateUrl: './book-purchase-history.component.html',
  styleUrls: ['./book-purchase-history.component.css']
})
export class BookPurchaseHistoryComponent implements OnInit {
  history: Object;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    // let headers=new HttpHeaders({"x-api-key":})

    
    this.http.get("http://localhost:3000/book/purchase/24").subscribe(data =>{
    this.history=data;
    console.log(this.history)
    })
  }

}
