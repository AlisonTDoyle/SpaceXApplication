import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableControllerComponent } from './table-controller.component';

describe('TableControllerComponent', () => {
  let component: TableControllerComponent;
  let fixture: ComponentFixture<TableControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
