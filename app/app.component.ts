import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  template: `<h1>Random company</h1>
              <employee-list></employee-list>
              <employee-detail></employee-detail>`,
  providers: [EmployeeService]
})
export class AppComponent { }
