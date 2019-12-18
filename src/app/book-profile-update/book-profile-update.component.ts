import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-profile-update',
  templateUrl: './book-profile-update.component.html',
  styleUrls: ['./book-profile-update.component.css']
})
export class BookProfileUpdateComponent implements OnInit {
  baseurl: FormGroup;

  constructor(private http:HttpClient,private router:Router) {
    this.baseurl=new FormGroup({
      address:new FormControl(),
      phone:new FormControl(),
      user_id:new FormControl(),
    })
   }
   


  ngOnInit() {
  }

}
