import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTableComponent } from './launch-table.component';

describe('LaunchTableComponent', () => {
  let component: LaunchTableComponent;
  let fixture: ComponentFixture<LaunchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
