import { Component } from '@angular/core';
import { Child2 } from '../child2/child2';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs:['a','userName','user']
})
export class Child1 {
  a:any;
  userName:any;
  user:any;
  
  num = 0;

  constructor() {
    console.log("Child-1 constructor")
  }
  ngOnInit() {
    console.log('Child-1 ngOnInit');
  }
  ngOnChanges(myParentDataChanges:any) {
    console.log('Child-1 ngOnChanges',myParentDataChanges);
  }
  ngDoCheck() {
    console.log('Child-1 ngDoCheck');
    console.log(this.user);
  }
  ngAfterContentInit() {
    console.log('Child-1 ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Child-1 ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Child-1 ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Child-1 ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Child-1 ngOnDestory');
  }
  increment() {
    this.num++;
  }
  
}
