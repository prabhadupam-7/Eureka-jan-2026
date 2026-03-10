import { Component, OnChanges, ViewChild, viewChild } from '@angular/core';
import { Child1 } from '../child1/child1';
import { Child2 } from '../child2/child2';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-parent',
  imports: [Child1,Child2,FormsModule,Demo1,Demo2],
  standalone:true,
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnChanges{
  a:any=10;
  num = 0;
  parentUserRole='';
  flag=true;
  receiveData(userRole:string){
      this.parentUserRole= userRole;
  }
  
  addSkill() {
  this.user.skills.push('SQL');
}
  user:any={
    name:'pavan',
    skills: ['Angular','java']
  }
  @ViewChild('myInputBox') myInputBox:any;
  
  constructor(private httpClient:HttpClient) {
    console.log("Parent constructor")
    console.log(this.myInputBox);
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
   ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBox);
    this.myInputBox.nativeElement.focus();
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }
  increment() {
    this.num++;
  }
}
