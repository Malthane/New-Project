import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  greetings () {
    return 'this data has been pass through viewchild';
  }

  logmessage(json: any) {
    console.log(json);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
