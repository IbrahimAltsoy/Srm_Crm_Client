import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { List_Customer } from 'src/app/contracts/customers/list_customer';
import { Single_Customer } from 'src/app/contracts/customers/single_customer';
import { CustomerService } from 'src/app/services/models/customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() id: string;
  customerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = await this.route.snapshot.params['id'];

    // Form başlangıç değerlerini belirle
    this.customerForm = this.fb.group({
      id: ['', Validators.required], // Başlangıçta boş bir id
      companyName: ['', Validators.required], // Başlangıçta boş bir companyName
      identityNumber: [''] // İsteğe bağlı, boş bir identityNumber
      // Diğer müşteri bilgileri için gerekli alanları ekleyin
    });

    // Müşteri bilgilerini getir
    const customerObservable: Observable<List_Customer> = this.customerService.getId(this.id);
    customerObservable.subscribe({
      next: (customer: List_Customer) => {
        // Müşteri bilgilerini formda göster
        this.customerForm.patchValue({
          id:customer.id,
          companyName: customer.companyName,
          identityNumber: customer.identityNumber
          // Diğer müşteri bilgileri için gerekli alanları ekleyin
        });

      },
      error: (error: any) => {
        console.error('Müşteri bilgileri getirilirken bir hata oluştu:', error);
      }
    });
  }

  async updateCustomer() {
    // Formdaki verileri al
    const updatedCustomer = this.customerForm.value;

    // Güncelleme işlemini gerçekleştir
    await this.customerService.update(this.id, updatedCustomer);
    console.log(updatedCustomer);
    debugger

    // Güncelleme işlemi tamamlandıktan sonra yönlendirme yapabilirsiniz
    this.router.navigate(['/admin/customer']);
  }
}
