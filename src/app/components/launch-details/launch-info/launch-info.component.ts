import { Component, Input } from '@angular/core';
import { IRocket } from '../../../interfaces/rocket';
import { ILaunch } from '../../../interfaces/launch';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { SaveButtonComponent } from '../save-button/save-button.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-launch-info',
  standalone: true,
  imports: [
    CommonModule
    , NgTemplateOutlet
    , SaveButtonComponent
    , YouTubePlayerModule
  ],
  templateUrl: './launch-info.component.html',
  styleUrl: './launch-info.component.scss'
})
export class LaunchInfoComponent {
  // Inputs and outputs
  @Input() launch: ILaunch | undefined;

  // Properties

  // Constructor
  constructor() {
  }

  // Methods
  public GoToLaunchArticlePage() {
    const target: string = "_blank";

    // Make sure user is brought to some page with more information
    if (this.launch?.links.article != null) {
      window.open(this.launch.links.article, target);
    } else {
      window.open(this.launch?.links.wikipedia, target)
    }
  }

  public GoToLaunchRedditThread() {
    const target: string = "_blank";

    window.open(this.launch?.links.reddit.launch, target)
  }
}
