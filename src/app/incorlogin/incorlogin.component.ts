import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-incorlogin',
  templateUrl: './incorlogin.component.html',
  styleUrls: ['./incorlogin.component.css']
})
export class IncorloginComponent implements OnInit {
  panda: any;
  value: any;

  constructor(private http:HttpClient, private router:Router) {
    this.panda= new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
   }

  ngOnInit() {
  }
login(value){
  let body={
    email:value.email,
    password:value.password,
  }
  this.http.post("https://reqres.in/api/login",body).subscribe(data=>{
    console.log(data)
    if(value.email = data && value.password ==data){
      this.router.navigate(['dashboard'])
    }
    // else{
    //   alert("check username are password")
    // }
  })
}
}
