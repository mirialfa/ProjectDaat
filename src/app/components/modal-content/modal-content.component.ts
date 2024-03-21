import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/item-model';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item,
  public dialogRef: MatDialogRef<ModalContentComponent>) { }
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
