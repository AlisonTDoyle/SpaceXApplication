import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISavedLaunch } from '../../../interfaces/saved-launch';
import { RemoveButtonComponent } from '../remove-button/remove-button.component';

@Component({
  selector: 'app-saved-item',
  standalone: true,
  imports: [
    RemoveButtonComponent
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

  // Methods
  public TriggerRefresh() {
    this.triggerRefresh.emit();
  }
}
