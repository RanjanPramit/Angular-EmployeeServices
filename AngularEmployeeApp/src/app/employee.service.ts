import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(){
    return [{id:1,name:"Roger",age:32},
    {id:2,name:"Nadal",age:31},
    {id:3,name:"Evan",age:22},
    {id:4,name:"Sanders",age:27},
    {id:5,name:"Pete",age:21}];
  }
}
