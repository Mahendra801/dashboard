import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
public sign
firstname: any
lastname: any
gender: any
email: any
password: any
  constructor(private http:HttpClient, private router:Router) {
    this.sign= new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    gender:new FormControl(),
    email:new FormControl(),
    password:new FormControl,
    })
   }
   submit(data){
     console.log("values",data.value)
     let userdata={
     FirstName:data.value.firstname,
     LastName:data.value.lastname,
     Gender:data.value.gender,
     Useremail:data.value.email,
     Password:data.value.password,
   }
   console.log(userdata)
     this.router.navigate(['login'])
   
   localStorage.setItem("values",JSON.stringify(userdata))
  }
  ngOnInit() {
  }
  

   
  }


