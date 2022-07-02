import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  <button (click)="getStart()">Click Here!</button>
  {{trial}}
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  trial = "";

  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }

}
