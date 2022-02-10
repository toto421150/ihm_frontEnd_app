import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import orders from '../../assets/allData.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private service:ApiService) { 
  }
  ngOnInit(): void {
    this.getEventsfromapi()
   }
  toggle:any = [];
  ordersList:any=[]
  // orderData= oders;
  
  getEventsfromapi(){
    this.service.getOrders().subscribe(data=> {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        this.ordersList.push(data[i]);
      }
    })
  }
}
