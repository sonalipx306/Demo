import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studList:any;
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


  
}

}
