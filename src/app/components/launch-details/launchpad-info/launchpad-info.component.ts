import { Component, Input } from '@angular/core';
import { ILaunchPad } from '../../../interfaces/launchpad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-launchpad-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './launchpad-info.component.html',
  styleUrl: './launchpad-info.component.scss'
})
export class LaunchpadInfoComponent {
  // Inputs and outputs
  @Input() launchpad:ILaunchPad | undefined;

  // Properties

  // Constructor
  constructor() {
    
  }

  // Methods
}
