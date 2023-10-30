import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { TablesService } from './tables.service';
import { Table } from './table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'islandgrille';
  menuIsOpen = false;

  tables?: Table[];

  constructor(private tableService: TablesService) {console.log("In the constructor of table constructor ")}

  ngOnInit(){
    this.tables = this.tableService.getTables();
    console.log("We are intializing tbale component")
    //this.tableService.selectTable(1);
  }

  onTableClick(id: number) {
    console.log("This is whats happening to tables in home page");
    console.log(this.tables);
  }



  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }
}
