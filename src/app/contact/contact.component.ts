import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  popupSubmit=false;
  constructor() { }

  ngOnInit(): void {
  }

  themes=[
    "Products",
    "Orders",
    "Users"
  ];

  inputName:String="";
  inputMail:String="";
  inputTheme:any="0";
  inputSubject:String="";
  inputMessage:String="";

  submitted(){
    this.popupSubmit=false;
    window.location.reload();
  }
}
