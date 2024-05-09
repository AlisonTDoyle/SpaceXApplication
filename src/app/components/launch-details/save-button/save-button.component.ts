import { Component, Input, OnInit } from '@angular/core';
import { SavedLaunchesService } from '../../../services/Saved-Launches/saved-launches.service';
import { CommonModule } from '@angular/common';
import { ILaunch } from '../../../interfaces/launch';
import { ISavedLaunch } from '../../../interfaces/saved-launch';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss'
})
export class SaveButtonComponent implements OnInit {
  // Inputs and outputs
  @Input() launch:ILaunch | any;

  // Properties
  launchSaved : boolean | undefined;

  // Constructors
  constructor(private _savedLaunchesService:SavedLaunchesService) {
  }

  // Methods
  ngOnInit(): void {
    this.GetSaveStatus();
  }

  SaveButtonClicked() {
    // Select appropriate method depending if launch is already saved
    if (this.launchSaved) {
      this.UnsaveLaunch();
    } else {
      this.SaveLaunch();
    }
  }

  GetSaveStatus() {
    this._savedLaunchesService.GetLaunchByLaunchId(this.launch.id).subscribe((data) => {
      if (typeof(data) == "object") {
        this.launchSaved = true;
      } else  {
        this.launchSaved = false;
      }
    })
  }

  SaveLaunch() {
    // Create object as mongodb expects it
    let launchToSave : ISavedLaunch = {
      launchId: this.launch.id,
      name: this.launch.name,
      rocket: this.launch.rocket.name,
      launchpad: this.launch.launchpad.name,
      date: this.launch.date_local,
      result: this.launch.result,
      patchUrl: this.launch.links.patch.small
    }

    // Save to db
    this._savedLaunchesService.AddLaunch(launchToSave).subscribe(() => {
      // Update display
      this.GetSaveStatus();
    });
  }
  
  UnsaveLaunch() {
    // Remove from db
    this._savedLaunchesService.DeleteLaunch(this.launch.id).subscribe(() => {
      // Update display
      this.GetSaveStatus();
    });
  }
}
