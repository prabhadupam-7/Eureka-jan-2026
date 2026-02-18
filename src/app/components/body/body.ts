import { Component } from '@angular/core';
import { DataBinding } from "../data-binding/data-binding";
import { Directives } from '../directives/directives';

@Component({
  selector: 'app-body',
  imports: [
    DataBinding,
    Directives
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
