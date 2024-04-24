import { Component, Input } from '@angular/core';
import { IRocket } from '../../../interfaces/rocket';
import { ILaunch } from '../../../interfaces/launch';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-launch-info',
  standalone: true,
  imports: [
    CommonModule
    , NgTemplateOutlet
  ],
  templateUrl: './launch-info.component.html',
  styleUrl: './launch-info.component.scss'
})
export class LaunchInfoComponent {
  // Inputs and outputs
  @Input() launch:ILaunch | undefined;

  // Properties

  // Constructor
  constructor() {
  }

  // Methods
}
