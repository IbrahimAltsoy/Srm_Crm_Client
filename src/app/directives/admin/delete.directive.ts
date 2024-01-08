import { HttpErrorResponse } from '@angular/common/http';
import { Directive, EventEmitter, Input, Output,HostListener, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
declare var $:any;

@Directive({
  selector: '[appDelete]'

})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
     private _renderer:Renderer2,
     private httpClient: HttpClientService,
     public dialog: MatDialog,
     private dialogService:DialogService)
   {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor: pointer;");
    img.height=25;
    img.width=25;
    // img.setAttribute("style","color: red;")
    _renderer.appendChild(element.nativeElement, img);
   }
   @Input() id:string;
   @Input() controller:string;
   @Output() callback: EventEmitter<any> = new EventEmitter();
@HostListener("click")
 async onclick(){

this.dialogService.openDialog({
  componentType:DeleteDialogComponent,
  data: DeleteState.Yes,
  afterClosed:()=>{
    const td = HTMLTableCellElement = this.element.nativeElement;
//await this.productService.delete(this.id);
this.httpClient.delete({
  controller: this.controller
},this.id).subscribe(data=>{

  $(td.parentElement).fadeOut(1800, ()=>{
    this.callback.emit();
   //

  });
  }, (errorMessage:HttpErrorResponse)=>{
    //
  });

  }
})

}
}

