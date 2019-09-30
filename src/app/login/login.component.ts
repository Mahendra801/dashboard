import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: FormGroup;
  logindata: any
  useremail
  password
  constructor(private router: Router) {
    this.log = new FormGroup({
      useremail: new FormControl(),
      password: new FormControl(),

    })
    let logindata = JSON.parse(localStorage.getItem('values'))
    console.log(logindata)
  }
  ngOnInit() {
  }
  login(value) {
    console.log(value)
    let user = JSON.parse(localStorage.getItem('values')).Useremail
    console.log(user)
    let pass = JSON.parse(localStorage.getItem('values')).Password;
    if (value.useremail == user && value.password == pass) {
      // alert("wellcome" + name)
      this.router.navigate(['incor'])
    }
    else {
      alert("check username and password")
    }
  }
}
