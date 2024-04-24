import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILaunch } from '../../../interfaces/launch';
import { CommonModule } from '@angular/common';
import { SpaceXAPIService } from '../../../services/Space-X-API/space-x-api.service';
import { IResponse } from '../../../interfaces/response';
import { IRocket } from '../../../interfaces/rocket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch-table',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './launch-table.component.html',
  styleUrl: './launch-table.component.scss'
})

export class LaunchTableComponent {
  // Inputs and outputs
  @Input() launchFilters: string[] = ["*", "*"]

  // Properties
  protected launches: ILaunch[] = [];
  protected response: IResponse | any;

  // Constructor
  constructor(private _spaceXApi: SpaceXAPIService, private _router:Router) {
    this.FetchLaunches(1)
  }

  // Methods
  ngOnChanges() {
    this.FetchLaunches(1);
  }

  protected FetchLaunches(page: number) {
    /*
    launchFilters[0] = rocket id
    launchFilters[1] = launchpad id
    */
    this._spaceXApi.FetchLaunchPads(page, this.launchFilters[0], this.launchFilters[1]).subscribe((data) => {
      // Capture data
      this.launches = data.docs;
      this.response = data;
    });
  }

  protected GoToLaunchDetails(launchId:string) {
    // Define navigation extras so that it includes clicked launch
    let extras = {
      state: {
        launchId: launchId
      } 
    }

    // Navigate and pass details
    this._router.navigate(['launch'], extras)
  }
}
