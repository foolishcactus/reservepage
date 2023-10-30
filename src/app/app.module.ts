import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TablereservepopoverComponent } from './tablereservepopover/tablereservepopover.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableReserverListComponent } from './table-reserver-list/table-reserver-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TablereservepopoverComponent, TableComponent, CommonModule, FormsModule, TableReserverListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
