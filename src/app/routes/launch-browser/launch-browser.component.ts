import { Component } from '@angular/core';
import { LaunchTableComponent } from '../../components/launch-browser/launch-table/launch-table.component';

@Component({
  selector: 'app-launch-browser',
  standalone: true,
  imports: [
    LaunchTableComponent
  ],
  templateUrl: './launch-browser.component.html',
  styleUrl: './launch-browser.component.scss'
})
export class LaunchBrowserComponent {

}
