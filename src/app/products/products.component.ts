import { Component, OnInit } from '@angular/core';

import products from '../../assets/data.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  toggle:any = [];
  productData= products;
}
