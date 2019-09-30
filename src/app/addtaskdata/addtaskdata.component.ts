import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addtaskdata',
  templateUrl: './addtaskdata.component.html',
  styleUrls: ['./addtaskdata.component.css']
})
export class AddtaskdataComponent implements OnInit {
  adding: FormGroup;

  constructor(private http:HttpClient, private router:Router) {
    this.adding=new FormGroup({
      userId:new FormControl(),
      id:new FormControl(),
      title:new FormControl(),
      body:new FormControl(),
    })
   }

  ngOnInit() {
  }
  add(value){
    let body={
      userId:value.userId,
      id:value.id,
      title:value.title,
      body:value.body,
    }
    this.http.post("https://jsonplaceholder.typicode.com/todos",body).subscribe(data=>{
      console.log(data)
    })
  }

}
