import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
term;
  MUMBAI="https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI "
  BANGALORE="https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE "
  DELHI="https://vast-shore-74260.herokuapp.com/banks?city=DELHI "
  KOLKATA="https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA "
  CUTTACK="https://vast-shore-74260.herokuapp.com/banks?city=CUTTACK "
  
 public bank: Object;

  constructor( private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI").subscribe(data=>{
      this.bank=data
      console.log(this.bank)
    })
  }
  add(){
    this.http.get(this.BANGALORE).subscribe(data=>{
      this.bank=data
      console.log(this.bank)
    })
  }
  add1(){
    this.http.get(this.DELHI).subscribe(data=>{
      this.bank=data
      console.log(this.bank)
    })
  }  
  add2(){
    this.http.get(this.KOLKATA).subscribe(data=>{
      this.bank=data
      console.log(this.bank)
    })
  } 
   add3(){
    this.http.get(this.CUTTACK).subscribe(data=>{
      this.bank=data
      console.log(this.bank)
    })
  }

}
