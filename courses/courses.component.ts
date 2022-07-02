import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  
  <h2 class="text-special">Coloring is fun</h2>
  <h2 [class.text-danger]="hasError">This is the green text</h2>
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
  public hasError = true;
  
  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }

}
