import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchInfoComponent } from './launch-info.component';

describe('LaunchInfoComponent', () => {
  let component: LaunchInfoComponent;
  let fixture: ComponentFixture<LaunchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
