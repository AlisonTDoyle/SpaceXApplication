import { Component, Input } from '@angular/core';
import { ILaunchHighLevel } from '../../../interfaces/launch';
import { CommonModule } from '@angular/common';
import { SpaceXAPIService } from '../../../services/Space-X-API/space-x-api.service';
import { IResponse } from '../../../interfaces/response';

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
  // Properties
  protected launches:ILaunchHighLevel[] = [];
  protected response:IResponse | any;

  // Constructor
  constructor(private _spaceXApi:SpaceXAPIService) {
    this.FetchLaunches(1)
 }

  // Methods
  protected FetchLaunches(page:number) {
    console.log(page);

    this._spaceXApi.FetchLaunchPads(page).subscribe((data) => {
      this.launches = data.docs;
      this.response = data;
    });
  }
}
