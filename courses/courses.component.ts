import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  <input [id]="myId" type="text" value="Vishwas">
  <input [disabled]="true" id="{{myId}}" type="text" value="Vishwas">
  {{trial}}
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public trial = "";
  public myId = "testId";

  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }

}
