import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-crudopration',
  templateUrl: './crudopration.component.html',
  styleUrls: ['./crudopration.component.css']
})
export class CrudoprationComponent implements OnInit {

  public id 
  public fname
  public lname
  op: FormGroup;
  data1: any;
  removeid=""
  title: any;
  author: any;
  crud:any;

  constructor(private http: HttpClient, private router: Router) {
    this.op = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
    })
  }

  ngOnInit() {
  }

  add(a) {
    let data = {
      id: a.value.id,
      title: a.value.title,
      author: a.value.author
    }
    this.http.post("http://localhost:3000/posts", data).subscribe(data => {
      console.log(data)
    })
  }
  view() {
    this.http.get("http://localhost:3000/posts").subscribe(data2 => {
      console.log(data2)
      this.data1 = data2
    })
  }
  remove() {
    this.http.delete("http://localhost:3000/posts" + "/" + this.removeid).subscribe(data => {
      console.log("successfully deleted")
      this.view();
    })
  }
  update(v) {
    this.crud = v
    console.log(this.crud)
    this.id = this.crud.id;
    this.fname = this.crud.title;
    this.lname = this.crud.author;
    console.log(this.id)
  }
}
