import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  empz!: string;

  @Output() myOutput = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
    this.myOutput.emit('wel done')
  }



}
