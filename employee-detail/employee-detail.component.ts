import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee-detail</h2>
  <div *ngFor="let e of employees">
    <li>{{e.id}}.{{e.name}}-{{e.age}}</li>
  </div>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees:any[] = [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  
}

}
