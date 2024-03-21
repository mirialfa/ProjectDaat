import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from  '@angular/material/tabs' ;
import { CommonModule, DatePipe } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DateStrPipe } from './date-str.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ModalContentComponent,
    DateStrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CommonModule,
    MatDialogModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
