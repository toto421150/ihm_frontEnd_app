import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const LINK_API = 'http://localhost:4200/data';
//const LINK_API = 'https://api.npoint.io/adabae85e08b61870d92';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getData(){
    return this.http.get<products[]>(LINK_API)
  };
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
