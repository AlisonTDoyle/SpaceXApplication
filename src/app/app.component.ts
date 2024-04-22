import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaceXAPIService } from './services/Space-X-API/space-x-api.service';
import { ILaunch } from './interfaces/launch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    , CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpaceXApplication';

  launches:ILaunch[] = [];

  constructor(private _spaceXApi:SpaceXAPIService) {

  }

  protected test() {
    this._spaceXApi.FetchLaunchPads().subscribe((data) => {
      this.launches = data.docs;
    });
  }
}
