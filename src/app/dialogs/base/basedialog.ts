import { MatDialogRef } from "@angular/material/dialog";

export class Basedialog<DeleteDialogComponent> {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>){}
  close(){
    this.dialogRef.close();
  }
}
