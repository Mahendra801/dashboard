import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-login',
  templateUrl: './book-login.component.html',
  styleUrls: ['./book-login.component.css']
})
export class BookLoginComponent implements OnInit {
  log: FormGroup;
  logintoken: any;

  constructor(private http:HttpClient,private router:Router) { 
    this.log=new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
  }

  ngOnInit() {
  }
  login(data){
    let logindata={
      email:data.value.email,
      password:data.value.password,
    }
    console.log("login data",logindata);
    this.http.post("http://localhost:3000/user/auth/login",logindata).subscribe(data=>{
      console.log(data);
      this.logintoken=data
      localStorage.setItem("loginstatus","true")
          this.router.navigate(["bookhome"]);

     
    })
  }
  }

