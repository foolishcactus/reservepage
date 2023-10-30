import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReserverListComponent } from './table-reserver-list.component';

describe('TableReserverListComponent', () => {
  let component: TableReserverListComponent;
  let fixture: ComponentFixture<TableReserverListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableReserverListComponent]
    });
    fixture = TestBed.createComponent(TableReserverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
