import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-janathadata',
  templateUrl: './janathadata.component.html',
  styleUrls: ['./janathadata.component.css']
})
export class JanathadataComponent implements OnInit {
  public newsTotalData = []
  constructor() { }

  ngOnInit() {
    this.newsTotalData = JSON.parse(localStorage.getItem('NewsData'))
  }

}
