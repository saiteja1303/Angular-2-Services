import {Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';

@Component ({
selector: 'employee-detail',
template: `<h2>Employee List</h2>
            <h3>{{errMsg}}</h3>
            <ul *ngFor = "let employee of employees">
                <li> {{employee.id}} - {{employee.name}} - {{employee.gender}}</li>
            </ul>
`
})
export class EmployeeDetailsComponent implements OnInit {
    employees = [];
    private errMsg: string;
    constructor(private _employeeService: EmployeeService){
    }
    ngOnInit(){
        this._employeeService.getEmployees()
        .subscribe(resEmpData => this.employees = resEmpData,
        resErrEmp => this.errMsg = resErrEmp
        ); 
    }
}