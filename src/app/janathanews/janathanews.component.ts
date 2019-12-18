import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../../Services/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-janathanews',
  templateUrl: './janathanews.component.html',
  styleUrls: ['./janathanews.component.css']
})
export class JanathanewsComponent implements OnInit {
  public newsData = []
  public ids = []

  constructor(private http: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.http.getNewsData().subscribe(data => {
      this.newsData = (data['news'])
      for (var i = 0; i < this.newsData.length; i++) {
        this.ids.push(this.newsData[i]._id)
      }
      console.log("111", this.newsData, this.ids)

    })
  }
  toNextPage(data) {
    localStorage.setItem('NewsData', JSON.stringify(data))
    this.router.navigate(['jdata'])
  }
}
