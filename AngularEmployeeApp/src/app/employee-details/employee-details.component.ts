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
    this._employeeService.getEmployees().subscribe(data=>this.employees=data);
  }

}
