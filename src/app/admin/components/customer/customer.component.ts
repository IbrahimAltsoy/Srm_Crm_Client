import { Component, OnInit, ViewChild } from '@angular/core';
import { ReadComponent } from './read/read.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
    this.readComponent.getCustomers();
  }
  @ViewChild(ReadComponent) readComponent:ReadComponent;

}
