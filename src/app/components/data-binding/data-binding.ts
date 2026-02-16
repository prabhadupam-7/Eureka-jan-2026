import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
    userName: string = 'Virat Kohli';
    img_url: string = 'https://cdn1.wionews.com/dev/wion/images/2025/20250505/virat-kohli-ct-3-201445.png';
    flag:boolean = true;
    flag2 = false;
    password = '';
    message : string ='';
    addToCart() {
    alert('Your Item is Added To the cart!!!')
     }
     performSearch(event: any) {
    console.log(event.target.value)
  }
    selectedState = "";
    selectedColor = "";
    count =0;
    celsius=0;
    num1=0;
    num2=0;
    operator:string='';
    result: number | string = '';
    fontSize:number=16;

    calculate(): void {
    

    switch (this.operator) {
        case "+":
           this.result = this.num1 + this.num2;
            break;
        case "-":
            this.result = this.num1 - this.num2;
            break;
        case "*":
            this.result = this.num1 * this.num2;
            break;
        case "/":
            if(this.num2 === 0){
              this.result="Cannot divide by zero";
             }
             else{
              this.result=this.num1/this.num2;
             } 
            break;
        default:
          this.result= "Invalid Operator";

       
      
  }
}
increaseFont(): void {
    this.fontSize += 2;
  }

decreaseFont(): void {
  if (this.fontSize > 8) {   // prevent too small
      this.fontSize -= 2;
}
}
}