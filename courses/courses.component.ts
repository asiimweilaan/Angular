import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  <div *ngIf="displayName;then thenBlock;else elseBlock"></div>
  <ng-template #thenBlock>
    <h2>Codevolution</h2>
  </ng-template>
  <ng-template #elseBlock>
    <h2>Name is hidden</h2>
  </ng-template>
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
