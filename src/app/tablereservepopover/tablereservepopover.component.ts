import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Table } from '../table';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-tablereservepopover',
  templateUrl: './tablereservepopover.component.html',
  styleUrls: ['./tablereservepopover.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TablereservepopoverComponent  implements OnInit {
  selectedTable: Table | null;
  private subscription: Subscription;
  reservationTime: number = 12;  // default time set to 12:00
  selectedTime = "";

  constructor(private tableService: TablesService) { }

  ngOnInit() {
    this.subscription = this.tableService.selectedTable$.subscribe(table => {
      this.selectedTable = table;
    });

    this.selectedTable = this.tableService.getTable(1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReserve() {
    
  }

  selectTime(time: string){
    if (this.selectedTime === time){
      this.selectedTime = "";
    }else{
      this.selectedTime = time;
    }
  }

  reserveButtonClick(){
    console.log("Trying to reserve table");
    console.log("Table num: " + this.selectedTable.number + " Time: " + this.selectedTime );
    this.tableService.reserveTable(this.selectedTable.number, this.selectedTime)
  }

  

  adjustTime(amount: number) {
    this.reservationTime += amount;
    // Ensure the time remains within a 24 hour format
    if (this.reservationTime > 23) {
      this.reservationTime = 0;
    } else if (this.reservationTime < 0) {
      this.reservationTime = 23;
    }
  }

}
