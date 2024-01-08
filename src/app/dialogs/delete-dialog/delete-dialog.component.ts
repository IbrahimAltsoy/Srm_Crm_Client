import { Component, Inject } from '@angular/core';
import { Basedialog } from '../base/basedialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/services/models/customer.service';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent extends Basedialog<DeleteDialogComponent>{
  constructor(
    dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState, private customerService: CustomerService
  ) {super(dialogRef)}

}

export enum DeleteState {
  Yes, No
}
