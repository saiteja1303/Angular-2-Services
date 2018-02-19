import { Component, OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
    selector: 'employee-list',
    template: `<h2>Employee List</h2>
                <h3>{{errMsg}}</h3>
                <ul *ngFor = "let employee of employees">
                    <li> {{employee.name}}</li>
                </ul>
    `
})
export class EmployeeListComponent implements OnInit {
    employees = [ ]
   private errMsg : string;
    constructor(private _employeeService: EmployeeService) {}
    ngOnInit(){
        this._employeeService.getEmployees()
        .subscribe(resEmpData => this.employees = resEmpData,
            resErrEmp => this.errMsg = resErrEmp
    ); 
    }
}