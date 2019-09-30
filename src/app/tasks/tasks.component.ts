import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskdata: Object;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {}
    submit(value){
      
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>{
      console.log(data)
      this.taskdata=data;
    })
  }
}
