import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Employee } from '../../services/employee';
import { EmployeeModel } from '../../models/employee-model';



@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
    employeeService=inject(Employee);
    employeeArr:WritableSignal<EmployeeModel[]>=signal([]);

    ngOnInit(){
      this.employeeService.getAllEmployees().subscribe((response:EmployeeModel[])=>{
        this.employeeArr.set(response);
        console.log(response);
      })
    }

}
