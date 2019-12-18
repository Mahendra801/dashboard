import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  log: FormGroup;

  constructor(private router:Router) {
    this.log=new FormGroup({
      user:new FormControl(),
      pass:new FormControl(),
    })
   }
  
  ngOnInit() {
  }
  login(data){
    let logindata=JSON.parse(localStorage.getItem("alldata"));
    console.log(logindata);
    let user=logindata.username;
    let pass=logindata.password;
    if(user==data.value.user && pass==data.value.pass)
    {
      alert("welcome  " +name)
    }
    else {
      alert("check uname and password")
    } 
  }
}
