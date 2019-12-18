import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-uplode-image',
  templateUrl: './uplode-image.component.html',
  styleUrls: ['./uplode-image.component.css']
})
export class UplodeImageComponent implements OnInit {
  img: FormGroup;

  constructor(private http:HttpClient,private router:Router) {
  //   this.img=new FormGroup({
  //     file:new FormControl()
  //     user_id:new FormControl()
  //   })
  //  }
  //  imageclick(data){
  //    let body={
  //      file.data.value.file,
  //       user_id.data.value.file,

  //    }
   }

  ngOnInit() {
    // this.http.post("http://localhost:3000/user/upload",).subscribe(data=>{
    // console.log(data)
    // })
  }

}
