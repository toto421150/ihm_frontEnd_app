import { Component, OnInit } from '@angular/core';

import users from '../../assets/data.json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  toggle:any = [];
  userData= users;
}
