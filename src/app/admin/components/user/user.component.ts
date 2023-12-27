
import { Component, OnInit } from '@angular/core';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { CustomerService } from 'src/app/services/models/customer.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  customers: List_Customer[];
  currentPageNo: number = 1;
  pageSize: number = 5;
  totalCustomerCount: number;
  totalPageCount: number;
  pageList: number[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.read(this.currentPageNo - 1, this.pageSize).then(
      (data) => {
        this.customers = data.customers;
        this.totalCustomerCount = data.totalCustomerCount;
        this.totalPageCount = Math.ceil(this.totalCustomerCount / this.pageSize);

        // Bu kısmı kontrol etmek için
        console.log('calculatePageList will be called');
        debugger;

        this.pageList = this.calculatePageList();
      },
      (error) => {
        console.error('API isteği başarısız: ', error);
      }
    );
  }

  calculatePageList(): number[] {
    const pageList: number[] = [];
    const maxPageCountToShow = 7;

    if (this.currentPageNo - 3 <= 0) {
      for (let i = 1; i <= Math.min(maxPageCountToShow, this.totalPageCount); i++) {
        pageList.push(i);
      }
    } else if (this.currentPageNo + 3 >= this.totalPageCount) {
      for (let i = Math.max(1, this.totalPageCount - maxPageCountToShow + 1); i <= this.totalPageCount; i++) {
        pageList.push(i);
      }
    } else {
      for (let i = this.currentPageNo - 3; i <= Math.min(this.currentPageNo + 3, this.totalPageCount); i++) {
        pageList.push(i);
      }
    }
console.log(this.customers);
debugger
    return pageList;
  }

  onPageChange(pageNo: number) {
    this.currentPageNo = pageNo;
    this.loadCustomers();
  }
}
