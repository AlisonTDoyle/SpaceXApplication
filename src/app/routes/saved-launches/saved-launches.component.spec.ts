import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedLaunchesComponent } from './saved-launches.component';

describe('SavedLaunchesComponent', () => {
  let component: SavedLaunchesComponent;
  let fixture: ComponentFixture<SavedLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedLaunchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavedLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
