
import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import productData from './product-data';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
 import Snackbar from 'awesome-snackbar';
import { Textonly } from '../../custom-directives/textonly';
import {NgxPaginationModule} from 'ngx-pagination';
import { Disablepaste } from '../../custom-directives/disablepaste';
import { Zoomin } from '../../custom-directives/zoomin';




@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FontAwesomeModule ,Textonly, NgxPaginationModule,Textonly,Disablepaste,Zoomin],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  faStar=faStar;
  productArr = productData;
  categorySet: any = new Set();
  p: number =1;

  constructor() {
    this.categorySet.add('All')
    this.categorySet.add('Kids clothing')
    productData.forEach(product => {
      this.categorySet.add(product.category);
    })
  }

  categoryChanged(event: any) {
    const selectedCategory = event.target.value;
    if (selectedCategory == 'All') {
      this.productArr = productData;
    } else {
      this.productArr = productData.filter(product => product.category == selectedCategory);
    }
  }
  openAlert(){
    swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackbar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }


}
