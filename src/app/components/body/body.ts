import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from '../directives/directives';
import { TaskStatus } from '../task-status/task-status';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-body',
  imports: [
    DataBinding,
    Directives,
    TaskStatus, ProductList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
