import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  studList:any;
  constructor(private httpClient :HttpClientModule){
    this.listSt();
  }
  stud = [
    {
      "id": "1",
      "name": "school1",
      "since": "2020-01-20"
    },
    {
      "id": "2",
      "name": "school2",
      "since": "2020-10-24"
    },
    {
      "id": "3",
      "name": "school3",
      "since": "2021-01-18"
    }
  ]
listSt(){
  this.studList = this.stud
  console.log(this.studList);

}
}
