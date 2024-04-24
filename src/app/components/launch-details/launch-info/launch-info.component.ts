import { Component, Input } from '@angular/core';
import { IRocket } from '../../../interfaces/rocket';
import { ILaunchHighLevel } from '../../../interfaces/launch';

@Component({
  selector: 'app-launch-info',
  standalone: true,
  imports: [],
  templateUrl: './launch-info.component.html',
  styleUrl: './launch-info.component.scss'
})
export class LaunchInfoComponent {
  // Inputs and outputs
  @Input() launch:ILaunchHighLevel | undefined;

  // Properties

  // Constructor
  constructor() {
  }

  // Methods
}
