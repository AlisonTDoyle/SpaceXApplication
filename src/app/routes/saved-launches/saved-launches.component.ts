import { Component } from '@angular/core';
import { SavedItemComponent } from '../../components/saved-launches/saved-item/saved-item.component';

@Component({
  selector: 'app-saved-launches',
  standalone: true,
  imports: [
    SavedItemComponent
  ],
  templateUrl: './saved-launches.component.html',
  styleUrl: './saved-launches.component.scss'
})
export class SavedLaunchesComponent {

}
