import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadInfoComponent } from './launchpad-info.component';

describe('LaunchpadInfoComponent', () => {
  let component: LaunchpadInfoComponent;
  let fixture: ComponentFixture<LaunchpadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchpadInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchpadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
