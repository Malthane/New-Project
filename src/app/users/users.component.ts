import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  emp = "akshay"
  value = '';

  constructor() { }

  sayThanks(value: string) {
    this.value = value
  }

  @ViewChild(PaymentsComponent) 
  child: PaymentsComponent = new PaymentsComponent

  ngOnInit(): void {
    this.child.greetings();

  }

}
