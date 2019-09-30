import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos2',
  templateUrl: './photos2.component.html',
  styleUrls: ['./photos2.component.css']
}) 
export class Photos2Component implements OnInit {
  getphoto
  constructor() { }

  ngOnInit() {
    this.getphoto=JSON.parse(localStorage.getItem('data'))
  }

}
