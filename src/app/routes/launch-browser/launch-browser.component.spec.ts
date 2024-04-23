import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchBrowserComponent } from './launch-browser.component';

describe('LaunchBrowserComponent', () => {
  let component: LaunchBrowserComponent;
  let fixture: ComponentFixture<LaunchBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchBrowserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
