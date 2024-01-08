import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [CommonModule,
    MatDialogModule,
     MatButtonModule,
     MatCardModule,
     MatTableModule,
      MatToolbarModule,
      MatCardModule,
       MatListModule,
       MatFormFieldModule,
       MatInputModule,
       FormsModule
  ]
})
export class DialogModule { }
