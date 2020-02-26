import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) { }

  public employees = [];

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
