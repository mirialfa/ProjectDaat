import { Injectable } from '@angular/core';
import { ModalContentComponent } from '../components/modal-content/modal-content.component';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  openModal(data:Item): void {
    this.dialog.open(ModalContentComponent, {
      width: '400px',
      data: data // Pass data to the modal component
    });
  }
}
