import { Routes } from '@angular/router';
import { LaunchBrowserComponent } from './routes/launch-browser/launch-browser.component';
import { LaunchDetailsComponent } from './routes/launch-details/launch-details.component';
import { SavedLaunchesComponent } from './routes/saved-launches/saved-launches.component';

export const routes: Routes = [
    { path: "", component: LaunchBrowserComponent },
    { path: "launch", component: LaunchDetailsComponent },
    {path: "saved-launches", component: SavedLaunchesComponent}
];
