import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from '../directives/directives';
import { TaskStatus } from '../task-status/task-status';
import { ProductList } from '../product-list/product-list';
import { EmpTable } from '../emp-table/emp-table';
import { EmployeeCrud } from '../employee-crud/employee-crud';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { Parent } from '../parent/parent';
import { Employee } from '../employee/employee';
import { UserList } from '../user-list/user-list';
import { Comment } from '@angular/compiler';
import { CommentList } from '../comment-list/comment-list';
import { Products } from '../products/products';
import { EmployeeList } from '../employee-list/employee-list';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';

@Component({
  selector: 'app-body',
  imports: [
    DataBinding,
    Directives, Parent,UserList,Products,CommentList,EmployeeList,ObservableDemo1
    
    //TaskStatus, ProductList, EmpTable, EmployeeCrud, PipesDemo, Employee,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
