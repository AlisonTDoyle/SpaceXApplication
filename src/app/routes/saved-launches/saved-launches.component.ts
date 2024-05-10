import { Component, OnInit } from '@angular/core';
import { SavedItemComponent } from '../../components/saved-launches/saved-item/saved-item.component';
import { SavedLaunchesService } from '../../services/Saved-Launches/saved-launches.service';
import { CommonModule } from '@angular/common';
import { ISavedLaunch } from '../../interfaces/saved-launch';

@Component({
  selector: 'app-saved-launches',
  standalone: true,
  imports: [
    SavedItemComponent
    , CommonModule
  ],
  templateUrl: './saved-launches.component.html',
  styleUrl: './saved-launches.component.scss'
})
export class SavedLaunchesComponent {
  // Properties
  savedLaunches : ISavedLaunch[] | any;

  // Constructor
  constructor(private _savedLaunchesService:SavedLaunchesService) {
    this.FetchData();
  }

  // Methods
  protected FetchData() {
    this._savedLaunchesService.FetchSavedLaunches().subscribe((data) => {
      this.savedLaunches = data;
    });
  }
}
