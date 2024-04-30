import { Component } from '@angular/core';
import { ILaunch } from '../../interfaces/launch';
import { SpaceXAPIService } from '../../services/Space-X-API/space-x-api.service';
import { LaunchInfoComponent } from '../../components/launch-details/launch-info/launch-info.component';
import { RocketInfoComponent } from '../../components/launch-details/rocket-info/rocket-info.component';
import { LaunchpadInfoComponent } from '../../components/launch-details/launchpad-info/launchpad-info.component';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [
    LaunchInfoComponent
    , RocketInfoComponent
    , LaunchpadInfoComponent
  ],
  templateUrl: './launch-details.component.html',
  styleUrl: './launch-details.component.scss'
})
export class LaunchDetailsComponent {
  // Inputs and outputs

  // Properties
  launchId:string = "";
  launch:ILaunch | undefined;

  // Constructor
  constructor(private _spaceXApi:SpaceXAPIService) {

  }

  // Methods
  ngOnInit() {
    // Receive launch id from browser
    this.launchId = history.state.launchId;

    // Fetch needed data
    this._spaceXApi.FetchLaunchPadWithId(this.launchId).subscribe((data) => {
      this.launch = data.docs[0];
    });

    console.log("launch-details.component: " + this.launch?.rocket)
  }
}
