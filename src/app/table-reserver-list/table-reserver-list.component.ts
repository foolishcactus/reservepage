import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '../table';
import { TablesService } from '../tables.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-reserver-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-reserver-list.component.html',
  styleUrls: ['./table-reserver-list.component.css']
})
export class TableReserverListComponent {

  constructor(private tableService: TablesService){}
  tablesList: Table[] = this.tableService.getTables();  // Your tables data goes here
  filteredTables: Table[] = [];


  numberOfGuests: number;
  reservationTime: string;
  tableType: string;

  ngOnInit() {
    this.filteredTables = this.tableService.getTables(); // Initially display all tables
  }

  filterTables() {
    this.filteredTables = this.tablesList.filter(table => {
      let guestMatch = true;
      let timeMatch = true;
      let typeMatch = true;

      // Check guests if a value was provided
      if (this.numberOfGuests) {
          guestMatch = table.seats >= this.numberOfGuests;
      }

      // Check time if a value was provided
      if (this.reservationTime) {
          timeMatch = !table.timeIsReserved[this.reservationTime];
      }

      // Check table type if a value was provided
      if (this.tableType && this.tableType !== 'Any') {
          typeMatch = table.type === this.tableType;
      }

      // Return true only if all conditions match
      return guestMatch && timeMatch && typeMatch;
  });
}}
