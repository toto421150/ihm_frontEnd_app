import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const LINK_ORDER = 'assets/orders.json';
 const LINK_PRODUCT = 'assets/products.json';
 const LINK_USER = 'assets/users.json';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }
    ngOnInit() {
  }

  public getProducts() {
    return this.http.get<products[]>(LINK_PRODUCT);
  }
  public getOrders() {
    return this.http.get<orders[]>(LINK_ORDER);
  }
  public getUsers() {
    return this.http.get<users[]>(LINK_USER);
  }
}

interface products{
  id:number;
  name: string;
  price: string;
  type:string;
  details:string;
}

interface orders{
  id:number;
  adress: string;
  content: string;
  date:string;
  comment:string;
}

interface users{
  id:number;
  firstName: string;
  lastName: string;
  birthday:string;
  email:string;
}
