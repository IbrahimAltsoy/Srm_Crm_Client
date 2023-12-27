import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClientService) { }

  read(page: number = 0, size: number = 5): Promise<{ totalCustomerCount: number, customers: List_Customer[] }> {
    const result: Observable<{ totalCustomerCount: number, customers: List_Customer[] }> = this.httpclient.get<{ totalCustomerCount: number, customers: List_Customer[] }>({
      controller: "customers",
      querystring: `page=${page}&size=${size}`
    });

    return result.toPromise();
}}
