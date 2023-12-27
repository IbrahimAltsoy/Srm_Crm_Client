import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { CustomerService } from 'src/app/services/models/customer.service';
declare var $:any;
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  constructor(private customerService: CustomerService){}
  displayedColumns: string[] = ['identityNumber', 'companyName'];
dataSource: MatTableDataSource<List_Customer>;
@ViewChild(MatPaginator) paginator: MatPaginator;
async getCustomers() {
  try {
    console.log('getCustomers start');
    const readCustomers: { totalCustomerCount: number, customers: List_Customer[] } = await this.customerService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5);
    console.log('readCustomers result:', readCustomers.customers);
    this.dataSource = new MatTableDataSource(readCustomers.customers);
    this.paginator.length = readCustomers.totalCustomerCount;
    console.log('getCustomers success');
  } catch (error) {
    console.error('getCustomers error:', error);
  }
}

async pageChange(){
  await this.getCustomers();
}

}
