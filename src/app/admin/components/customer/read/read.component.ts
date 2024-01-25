import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { CustomerService } from 'src/app/services/models/customer.service';

declare var $:any;
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  constructor(private customerService: CustomerService,private dialogService:DialogService,private router:Router){}
  displayedColumns: string[] = ['no','identityNumber', 'companyName', 'delete', 'update'];
  dataSource: MatTableDataSource<List_Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  async getCustomers(){
    const pageIndex = this.paginator ? this.paginator.pageIndex : 0;
    const pageSize = this.paginator ? this.paginator.pageSize : 5;
    const listCustomer:{totalCustomerCount: number, customers:List_Customer[]} = await this.customerService.read(this.paginator? this.paginator.pageIndex:0,this.paginator? this.paginator.pageSize:5);
    listCustomer.customers = listCustomer.customers.map((customer, index) => ({ ...customer, no: (pageIndex * pageSize) + index + 1 }));
    this.dataSource = new MatTableDataSource(listCustomer.customers);
    this.paginator.length = listCustomer.totalCustomerCount;

  }
  async delete(id:string){
this.customerService.delete(id);
  }
  async pageChange(){
    await this.getCustomers();
  }
    async ngOnInit() {

  await this.getCustomers();

    }
    navigateToUpdate(id: string) {
      // Butona tıklandığında UpdateComponent'e yönlendir
   this.customerService.getId(id);

    this.router.navigate(['/admin/update', id]);


    }

}
