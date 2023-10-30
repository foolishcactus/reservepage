import { Injectable } from '@angular/core';
import { Table } from './table';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private selectedTableSubject: BehaviorSubject<Table | null> = new BehaviorSubject<Table | null>(null);

  tablesList: Table[]  = [
    {
      number: 1,
      imgURL: 'https://w0.peakpx.com/wallpaper/185/818/HD-wallpaper-lagoon-view-dining-resort-bar-eat-sea-beach-lagoon-sand-dining-chairs-aqua-luxury-blue-table-hotel-exotic-islands-view-ocean-paradise-restaurant-dine-island-tropical.jpg',
      seats: 4,
      type: "Booth",
      timeIsReserved: {
        four: false,
        five: true,
        six: false,
        seven: false,    
        eight: false,    
        nine: false,            
      }
    },
    {
      number: 2,
      imgURL: 'https://w0.peakpx.com/wallpaper/185/818/HD-wallpaper-lagoon-view-dining-resort-bar-eat-sea-beach-lagoon-sand-dining-chairs-aqua-luxury-blue-table-hotel-exotic-islands-view-ocean-paradise-restaurant-dine-island-tropical.jpg',
      seats: 2,
      type: "Booth",
      timeIsReserved: {
        four: true,
        five: true,
        six: false,
        seven: true,    
        eight: false,    
        nine: false,            
      }
    },
    {
      number: 3,
      imgURL: 'https://w0.peakpx.com/wallpaper/185/818/HD-wallpaper-lagoon-view-dining-resort-bar-eat-sea-beach-lagoon-sand-dining-chairs-aqua-luxury-blue-table-hotel-exotic-islands-view-ocean-paradise-restaurant-dine-island-tropical.jpg',
      seats: 4,
      type: "Table",
      timeIsReserved: {
        four: true,
        five: false,
        six: true,
        seven: false,    
        eight: true,    
        nine: false,            
      }
    },
    {
      number: 4,
      imgURL: 'https://w0.peakpx.com/wallpaper/185/818/HD-wallpaper-lagoon-view-dining-resort-bar-eat-sea-beach-lagoon-sand-dining-chairs-aqua-luxury-blue-table-hotel-exotic-islands-view-ocean-paradise-restaurant-dine-island-tropical.jpg',
      seats: 10,
      type: "Table",
      timeIsReserved: {
        four: true,
        five: true,
        six: false,
        seven: false,    
        eight: true,    
        nine: false,            
      }
    },
    {
      number: 5,
      imgURL: 'https://w0.peakpx.com/wallpaper/185/818/HD-wallpaper-lagoon-view-dining-resort-bar-eat-sea-beach-lagoon-sand-dining-chairs-aqua-luxury-blue-table-hotel-exotic-islands-view-ocean-paradise-restaurant-dine-island-tropical.jpg',
      seats: 2,
      type: "Table",
      timeIsReserved: {
        four: false,
        five: false,
        six: true,
        seven: true,    
        eight: false,    
        nine: false,            
      }
    }
  ] 


  constructor() { }

  

  selectedTable$ = this.selectedTableSubject.asObservable();

  getTables(){
    console.log("this is tableslist");
    console.log(this.tablesList);
    return this.tablesList;
  }

  getTable(num: number){
    const table = this.tablesList.find((t) => t.number === num);
    return table;
  }

  selectTable(num: number) {
    const table = this.tablesList.find((t) => t.number === num);
    console.log("Selecting table")
    console.log(table)
    this.selectedTableSubject.next(table || null);
  }

  reserveTable(id: number, time: string) {
    const table = this.tablesList.find(t => t.number === id);
    console.log("Reserving table")
    console.log(table);

    if ('four' === time && table.timeIsReserved.four != true){
      table.timeIsReserved.four = !table.timeIsReserved.four
    }else if('five' === time && table.timeIsReserved.five != true){
      table.timeIsReserved.five = !table.timeIsReserved.five
    }else if ('six' === time && table.timeIsReserved.six != true){
      table.timeIsReserved.six = !table.timeIsReserved.six
    }else if ('seven' === time && table.timeIsReserved.seven != true){
      table.timeIsReserved.seven = !table.timeIsReserved.seven
    }else if('eight' === time && table.timeIsReserved.eight != true){
      table.timeIsReserved.eight = !table.timeIsReserved.eight
    }else if('nine' === time && table.timeIsReserved.nine != true){
      table.timeIsReserved.nine = !table.timeIsReserved.nine
    }
  }

  //getTableTimeStatus(num: number, time:string){
  //  const table = this.tablesList.find(t => t.number === num);
//
  //  if (table.)
  //}


  
}
