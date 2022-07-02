import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{"Hello "+parentData}}</h2>

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
  
  @Input() public parentData;

  constructor() {
    

  }

  ngOnInit(): void {
  }

  logMessage(value:string){
    console.log(value);
  }

  onClick(event:Event){
    console.log(event);


  }

}
