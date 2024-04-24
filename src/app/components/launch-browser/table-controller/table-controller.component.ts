import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRocket } from '../../../interfaces/rocket';
import { CommonModule } from '@angular/common';
import { SpaceXAPIService } from '../../../services/Space-X-API/space-x-api.service';
import { ILaunchPad } from '../../../interfaces/launchpad';

@Component({
  selector: 'app-table-controller',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table-controller.component.html',
  styleUrl: './table-controller.component.scss'
})
export class TableControllerComponent {
  // Inputs and outputs
  @Output() launchFilters = new EventEmitter();

  // Properties
  rockets:IRocket[] = [];
  launchpads:ILaunchPad[] = [];

  // Constructor
  constructor(private _spaceXApi:SpaceXAPIService) {
    this.FetchAllRockets();

    this.FetchAllLaunchpads();
  }

  // Methods
  protected FetchAllRockets() {
    this._spaceXApi.FetchAllRockets().subscribe((data) => {
      data.map((rocket:IRocket) => {
        this.rockets.push(rocket);
      })
    });
  }

  protected FetchAllLaunchpads() {
    this._spaceXApi.FetchAllLaunchpads().subscribe((data) => {
      data.map((launchpad:ILaunchPad) => {
        this.launchpads.push(launchpad);
      })
    });
  }

  protected InitialiseFilteredSearch(selectedRocket:string,selectedLaunchPad:string) {
    this.launchFilters.emit([selectedRocket, selectedLaunchPad]);
  }
}
