import { Component, OnInit } from '@angular/core';

import orders from '../../assets/data.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  toggle:any = [];
  orderData= orders;
}
