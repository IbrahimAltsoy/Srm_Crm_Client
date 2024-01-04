import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Create_User } from 'src/app/contracts/users/CreateUser';
import { User } from 'src/app/contracts/users/user';
import { UserService } from 'src/app/services/models/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,private formBuilder: UntypedFormBuilder,private snackBar: MatSnackBar){}
  frm: UntypedFormGroup;
  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      name: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      surname: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      username: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],phonenumber: ["", [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3)
      ]],
      email: ["", [
        Validators.required,
        Validators.maxLength(250),
        Validators.email
      ]],
      password: ["",
        [
          Validators.required]]
        ,
      passwordConfirm: ["",
        [
          Validators.required
        ]]
    }, {
      validators: (group: AbstractControl): ValidationErrors | null => {
        let sifre = group.get("password").value;
        let sifreTekrar = group.get("passwordConfirm").value;
        return sifre === sifreTekrar ? null : { notSame: true };
      }
    })
  }
 // Component içindeki get metodu güncellenmiştir
get component(): { [key: string]: any } {
  return this.frm.controls;
}

  submitted:boolean=false;
 async onSubmit(user:User){
    this.submitted =true;
    if(this.frm.invalid) return;
    const result:Create_User = await this.userService.create(user);

    if(result.succeeded){
this.showSuccessMessage();
    }
    else{this.showErrorMessage("Bir hata oluştu lütfen tekrar deneyiniz!.")}

  }
  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Kapat', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-error'] // snackbar-error adında CSS sınıfını ekleyerek kırmızı rengi belirle
    });
  }
  showSuccessMessage() {
    // Başarılı bir durumda snackbar göster
    this.snackBar.open('İşlem başarıyla tamamlandı.', 'Kapat', {
      duration: 3000, // snackbar'ın ekranda kalma süresi (ms cinsinden)
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'] // snackbar-success adında CSS sınıfını ekleyerek başarı rengini belirle
    });
  }


}
