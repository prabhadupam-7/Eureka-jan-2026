import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-table',
  imports: [CommonModule],
  templateUrl: './emp-table.html',
  styleUrl: './emp-table.css',
})
export class EmpTable {
    employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
     ];


  cartItems = [
	  { id: 1, name: 'Wireless Headphones', price: 2499, qty: 1},
	  { id: 2, name: 'Smart Watch', price: 4999, qty: 2 },
	  { id: 3, name: 'Bluetooth Speaker', price: 1999, qty: 1 },
	  { id: 4, name: 'Power Bank', price: 1299, qty: 3 }
	];

  increment(items :any){

    items.qty = items.qty+1;
  }
  decrement(items :any){
    if(items.qty > 0){
      items.qty = items.qty - 1;
    }
  }
  getTotal(){
    let total = 0;
    for(let item of this.cartItems){
      total = total + (item.price * item.qty);
    }
    return total;
  }

}
