import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TablereservepopoverComponent } from '../tablereservepopover/tablereservepopover.component';
import { Table } from '../table';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, TablereservepopoverComponent]
})
export class TableComponent  implements OnInit {
  @Input() table?: Table;
  @Output() tableClicked = new EventEmitter<number>();

  constructor(private tableService: TablesService) { }

  ngOnInit() {
    
  }

  onClick(e: Event){
    this.tableClicked.emit(this.table.number);
    console.log('table clicked ' + this.table.number);
    this.tableService.selectTable(this.table.number);
  
  }

  hover(){
    //this.isHover = true;
    //console.log("This is boolean selected " + this.isSelected)
  }

  unhover(){
    //this.isHover = false
  }
}
