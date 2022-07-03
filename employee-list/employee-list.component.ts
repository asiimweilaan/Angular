import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employee-list</h2>
  <div *ngFor="let e of employees">
    <li>{{e.id}}.{{e.name}}-{{e.age}}</li>
  </div>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees:any[]=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees() 
        .subscribe(data => this.employees = data);
  }

}
