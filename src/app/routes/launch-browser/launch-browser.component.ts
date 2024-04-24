import { Component, EventEmitter, Output } from '@angular/core';
import { LaunchTableComponent } from '../../components/launch-browser/launch-table/launch-table.component';
import { TableControllerComponent } from '../../components/launch-browser/table-controller/table-controller.component';
import { IRocket } from '../../interfaces/rocket';

@Component({
  selector: 'app-launch-browser',
  standalone: true,
  imports: [
    LaunchTableComponent
    , TableControllerComponent
  ],
  templateUrl: './launch-browser.component.html',
  styleUrl: './launch-browser.component.scss'
})
export class LaunchBrowserComponent {
  // Inputs and outputs
  @Output() searchParameters = new EventEmitter();

  // Properties
  launchFilter:string[] = [];

  // Constructor

  // Methods
  protected SetLaunchFilters(filters:string[]) {
    this.launchFilter = filters;
  }
}
