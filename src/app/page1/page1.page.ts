import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Page1Page implements OnInit {

  data: Data[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data: Data[]) => {
      this.data = data;
    });
  }

}
