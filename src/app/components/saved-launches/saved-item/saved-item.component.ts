import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISavedLaunch } from '../../../interfaces/saved-launch';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-item',
  standalone: true,
  imports: [
    RemoveButtonComponent
    , CommonModule
  ],
  templateUrl: './saved-item.component.html',
  styleUrl: './saved-item.component.scss'
})
export class SavedItemComponent {
  // Inputs and outputs
  @Output() triggerRefresh = new EventEmitter();
  @Input() savedLaunch : ISavedLaunch | undefined;

  // Properties

  // Constructor
  constructor (private _router:Router) {

  }

  // Methods
  public TriggerRefresh() {
    this.triggerRefresh.emit();
  }

  protected GoToLaunchDetails() {
    // Define navigation extras so that it includes clicked launch
    let extras = {
      state: {
        launchId: this.savedLaunch?.launchId
      } 
    }

    // Navigate and pass details
    this._router.navigate(['launch'], extras)
  }
}
