import { Component, Inject } from '@angular/core';
import { Basedialog } from '../base/basedialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.css'
})
export class DeleteDialogComponent extends Basedialog<DeleteDialogComponent>{
  constructor(
    dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteState,
  ) {super(dialogRef)}


}

export enum DeleteState {
  Yes, No
}
