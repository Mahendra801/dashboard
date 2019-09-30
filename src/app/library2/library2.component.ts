import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library2',
  templateUrl: './library2.component.html',
  styleUrls: ['./library2.component.css']
})
export class Library2Component implements OnInit {
public librarydata:any;

  constructor() { }

  ngOnInit() {
    this.librarydata=JSON.parse(localStorage.getItem("book"))
    console.log(this.librarydata)
  }
}
