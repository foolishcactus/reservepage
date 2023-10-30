import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereservepopoverComponent } from './tablereservepopover.component';

describe('TablereservepopoverComponent', () => {
  let component: TablereservepopoverComponent;
  let fixture: ComponentFixture<TablereservepopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TablereservepopoverComponent]
    });
    fixture = TestBed.createComponent(TablereservepopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
