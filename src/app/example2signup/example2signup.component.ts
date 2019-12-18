import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-example2signup',
  templateUrl: './example2signup.component.html',
  styleUrls: ['./example2signup.component.css']
})
export class Example2signupComponent implements OnInit {
  sin: FormGroup; 
   
  constructor(private router: Router) {
    this.sin = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      age: new FormControl(),
      user: new FormControl(),
      pass: new FormControl(),
    })
  }
  signup(data){
    let newdata={
      fname:data.value.fname,
      lname:data.value.lname,
      age:data.value.age,
      user:data.value.user,
      pass:data.value.pass,
    }
    console.log(newdata)
    this.router.navigate(['example1login'])
    localStorage.setItem("alldata",JSON.stringify(newdata))
  }

  ngOnInit() { }

}


