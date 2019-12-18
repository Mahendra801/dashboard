import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  library: any;

  constructor(private http: HttpClient, private router: Router) {
    this.library = JSON.parse(localStorage.getItem('bookdetail'))
    console.log(this.library)
    
  }
  buy(){  
    if(localStorage.getItem("loginstatus")=="true"){
      alert("bookbuy-successfull")
      this.router.navigate(["bookbuye"]);
    }
    else{
      
      alert("notlogedin")
      this.router.navigate(["booksignup"]);
    }
    }
  ngOnInit() {

  }


}
