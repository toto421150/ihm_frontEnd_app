import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import products from '../../assets/data.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(/*private service:ApiService*/) { }
  ngOnInit(): void {
    // this.getEventsfromapi()
   }
  toggle:any = [];
  productData= products;
  //productsList:any=[]

  // getEventsfromapi(){
  //   this.service.getData().subscribe(data=> {// GET: list des projets
  //     for (let i = 0; i < data.length; i++) {
  //       console.log(data);
  //       this.productsList.push(data[i]);
  //     }
  //   })
    //console.log(this.productsList);
  // }
}
