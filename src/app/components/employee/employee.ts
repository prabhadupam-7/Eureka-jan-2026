import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  employees:any[]=[]
  constructor(private employeeService: EmployeeService){
    this.employees=employeeService.employees
  }
  SelectedEmployee='All';
  get filteringDD(){
    if(this.SelectedEmployee==='Male Employees'){
      return this.employees.filter(t=> t.gender.toLowerCase()==='male');
    }
    if(this.SelectedEmployee==='Female Employees'){
      return this.employees.filter(t=> t.gender.toLowerCase()==='female');
    }
    return this.employees;
  }
}
