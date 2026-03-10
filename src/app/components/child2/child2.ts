import { Component, EventEmitter,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './child2.html',
  styleUrl: './child2.css',
  inputs: ['a'],
  outputs:['eventEmitterObj']
})
export class Child2 {
  a: any;
  userName='prabha dupam';
  userRole:any='Trainer';

  eventEmitterObj:any=new EventEmitter();
  sendDataToParent(){
      this.eventEmitterObj.emit(this.userRole);
  }
}
