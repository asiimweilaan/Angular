import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  <h2 [ngClass]="messageClasses">ThisColortesting</h2>
  <h2 [style.color] = "highlightColor">Testing out style binding</h2>
  <h2 [style.color] = "hasError? 'red':'cyan'">Testing out style binding</h2>

  {{trial}}
  `,
  styles: [`
  .text-special{
    color:red;
  }
  .text-danger{
    color:green;
  }
  
  `]
})
export class CoursesComponent implements OnInit {
  public trial = "";
  public myId = "testId";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'yellow';

  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }
  public messageClasses = {
    "text-special":this.hasError,
    "text-danger":!this.hasError
  }

}
