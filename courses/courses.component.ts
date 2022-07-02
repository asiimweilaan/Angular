import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  
  <div *ngFor="let color of colors;even as i">
    <h2>{{i}} {{color}}</h2>
  </div>
  <!-- <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You picked the red color</div>
    <div *ngSwitchCase="'blue'">You picked the blue color</div>
    <div *ngSwitchCase="'green'">You picked the green color</div>

  </div> -->

  {{name}}
  
  {{greeting}}
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
  public colors = ["red","blue","green"];
  public color = "red";
  displayName = true;
  public name="";
  public trial = "";
  public myId = "testId";
  public highlightColor = 'yellow';
  public greeting ="";

  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }
  logMessage(value:string){
    console.log(value);
  }

  onClick(event:Event){
    console.log(event);
    this.greeting = 'Welcome to Coding of the evolution';

  }

}
