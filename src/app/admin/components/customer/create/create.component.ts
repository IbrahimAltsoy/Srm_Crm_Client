import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Create_Customer } from 'src/app/contracts/customers/Create_Customer';
import { CustomerService } from 'src/app/services/models/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  constructor(private customerService: CustomerService, private snackBar: MatSnackBar){}
  ngOnInit(): void {

  }
  @Output() createdCustomer: EventEmitter<Create_Customer> = new EventEmitter();
  create(identityNumber:HTMLInputElement, companyName:HTMLInputElement){
    const create_customer: Create_Customer= new Create_Customer();
    create_customer.identityNumber = identityNumber.value;
    create_customer.companyName = companyName.value;
    this.customerService.create(create_customer,(result)=>{
      console.log("başarılı bir şekilde şirket eklendi.",result)
    },(errorMessage)=>{
      console.error('Hata:',errorMessage);
      const _error = this.extractErrorMessage(errorMessage);
      this.showErrorMessage(_error);
    });
    this.createdCustomer.emit(create_customer);


  }
  private extractErrorMessage(error: any): string | null {
    // API'den gelen hatanın detaylarını inceleyerek uygun bir hata mesajı çıkartabilirsiniz.
    // Örneğin, error.error.message veya error.error.errors gibi alanlardan hata mesajını alabilirsiniz.
    // Bu adımlar API'nize özgü olacaktır.


    return "Identity Numarası veya Şirket ismini yanlış girdiniz.";
  }


  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Kapat', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-error'] // snackbar-error adında CSS sınıfını ekleyerek kırmızı rengi belirle
    });
  }

  }
