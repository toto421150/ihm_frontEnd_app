import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import users from '../../assets/allData.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private service:ApiService) { 
  }
  ngOnInit(): void {
    this.getEventsfromapi()
   }
  toggle:any = [];
  usersList:any=[]
  // userData= users;

  getEventsfromapi(){
    this.service.getUsers().subscribe(data=> {
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        this.usersList.push(data[i]);
      }
    })
  }
}
