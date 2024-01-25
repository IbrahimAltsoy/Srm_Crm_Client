import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { Create_Customer } from 'src/app/contracts/customers/Create_Customer';
import { HttpErrorResponse } from '@angular/common/http';
import { Single_Customer } from 'src/app/contracts/customers/single_customer';

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
}

 getId(id:string):Observable<List_Customer>{
const request = this.httpclient.get<List_Customer>({
controller:"customers",
  querystring:`Id=${id}`

},id)

return request;
}

create(customer: Create_Customer, successCallBack?: (result) => void, errorCallBack?: (errorMessage: string) => void){

  this.httpclient.post({
    controller: "customers"
  }, customer)
    .subscribe(result => {
      successCallBack(result);
    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key: string, value:Array<string>} >= errorResponse.error;
      let message = "";

      _error.forEach((v,index)=>{
        v.value.forEach((_v, _index)=>{
          console.log(_v)
          message+= `${_v}<br>`;

        });
      });

     errorCallBack(message);
    });

  }

  async update(id:string, updatedCustomer:List_Customer):Promise<any>{
const result:Observable<List_Customer> = await this.httpclient.put<List_Customer>({
  controller:"customers"

},updatedCustomer)

return firstValueFrom(result);
   //return result.toPromise();
  }

  async delete(id:string,successCallBack?: () => void, errorCallBack?: (errorMessage:string) => void){
    const deleteObservable: Observable<any>= this.httpclient.delete<any>({
       controller: "customers",
     },id);

     await firstValueFrom(deleteObservable);
}

}
