import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item-model';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})

export class ItemComponent {
  @Input() items!: Item[];
  itemsToDisplay!: Item[];
  listState: boolean = true;
  sortDesc=false;
  editingIndex: number | null = null;

  constructor(
    private apiService:ApiService,
    private modalService:ModalService){}
  ngOnInit() {
    this.items = this.sort(this.items);
    this.itemsToDisplay = this.items;
  }
  
  toggleState() {
    this.listState = !this.listState;
  }
  handleImageError(item:Item) {
    item.Poster = ''; 
  }
  titleChanged(event:any,item:Item){
    this.editingIndex = null;
   item.Title= event.target.value;
    this.apiService.updateItem('').subscribe();
  }
  openModal(item:Item){
this.modalService.openModal(item);
  }
  toggleSort(){
    this.sortDesc = !this.sortDesc;
    this.sort(this.itemsToDisplay, this.sortDesc);
  }
  moveToInput(index:number){
    this.editingIndex = index;
  }
  search(event: any) {
    debugger;
    let param = event.target.value;
    if (param) {
      this.itemsToDisplay = this._filter(param);
    } else {
      this.itemsToDisplay = this.items;
    }
  }
  sort(items:any,isDesc:boolean = false){
    if(isDesc){
   return  this.items.sort((a:Item, b:Item) => b.Title.localeCompare(a.Title));
    }
   return  this.items.sort((a:Item, b:Item) => a.Title.localeCompare(b.Title));
  }
  clear(inputField: any) {
    this.itemsToDisplay = this.items;
    inputField.value = '';
  }
  private _filter(value: any): any {
    const filterValue = value;
    return this.items?.filter(
      (val: Item) =>
        val.Title.toLowerCase().includes(filterValue) ||
        val.Year.toLowerCase().includes(filterValue)
    );
    
  }
  
}
