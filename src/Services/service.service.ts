import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map"
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getNewsData(): any {
    return this.http.get('https://jvapi.peelpress.com/news').map(res => {
      return res as any
    })
  }
}
