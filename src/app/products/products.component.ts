import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import products from '../../assets/allData.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private service:ApiService) { 
  }
  ngOnInit(): void {
    this.getEventsfromapi()
   }
  toggle:any = [];
  productsList:any=[]
  // productData= products;
  
  getEventsfromapi(){
    this.service.getProducts().subscribe(data=> {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        this.productsList.push(data[i]);
      }
    })
  }
}
