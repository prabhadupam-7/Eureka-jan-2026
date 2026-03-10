import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgePipe } from '../../age-pipe';

import { RemainingPipe } from '../../custom-pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom-pipes/ordinal-pipe';
import { MysortPipe } from '../../custom-pipes/mysort-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,FormsModule,RemainingPipe,AgePipe,OrdinalPipe,MysortPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
   userName:string ='Sachin Tendulkar';
   sal: number=5000;
   dateObj= new Date();
   user= { name:'Sanjay',
          age: 50,
          add: 'bangalore',
          role: 'trainer'
};
  num: number=21;
   cars=['Maruti','honda','camry','toyota'];
   msg:string='hello';
   age:string='2026-04-21';
   arr:any= [20,40,10,50,80];
}
