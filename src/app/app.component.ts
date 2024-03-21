import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Item } from './models/item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DattProject';
  constructor(private api: ApiService) {}
  allItemsList!: Item[];
  itemsGroup: {[key: string]: Item[] } = {};
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.allItemsList = [];
    this.itemsGroup = {};
    this.api.getData().subscribe((res: any) => {
      
      this.allItemsList = res.results;
      this.allItemsList.forEach((item) => {
        if (this.itemsGroup[item.Type]) {
          this.itemsGroup[item.Type].push(item);
        }
        else{
          this.itemsGroup[item.Type] = [];
          this.itemsGroup[item.Type].push(item);
        }
      });
    });
  }
  refresh()
  {
this.getData();
  }
}
