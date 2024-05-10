import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISavedLaunch } from '../../../interfaces/saved-launch';
import { SavedLaunchesService } from '../../../services/Saved-Launches/saved-launches.service';

@Component({
  selector: 'app-remove-button',
  standalone: true,
  imports: [],
  templateUrl: './remove-button.component.html',
  styleUrl: './remove-button.component.scss'
})
export class RemoveButtonComponent {
  // Inputs and outputs
  @Output() triggerRefresh = new EventEmitter();
  @Input() savedLaunch: ISavedLaunch | any;

  // Properties

  // Constructor
  constructor(private _savedLaunchService: SavedLaunchesService) {

  }

  // Methods
  protected RemoveSavedLaunch() {
    this._savedLaunchService.DeleteLaunch(this.savedLaunch.launchId).subscribe(() => {
      this.triggerRefresh.emit();
    });
  }
}
