import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee-model';

@Injectable({
  providedIn: 'root',
})
export class Employee{
  api_url = 'http://localhost:3000/employees';
  httpClient = inject(HttpClient);

  getAllEmployees(): Observable<EmployeeModel[]> {
    // return this.httpClient.get<Employee[]>(this.api_url);

    return this.httpClient.get<EmployeeModel[]>(this.api_url).pipe(
      map((responseArr: EmployeeModel[])=>{
        return responseArr.map((empInfo: EmployeeModel)=> {
          let { id, firstName, lastName, sal, gender } = empInfo;
          return new EmployeeModel(id,firstName, lastName, sal, gender);
        });
      })
    );
  }
}