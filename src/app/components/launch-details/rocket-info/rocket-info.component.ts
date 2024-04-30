import { Component, Input, OnInit } from '@angular/core';
import { IRocket } from '../../../interfaces/rocket';

@Component({
  selector: 'app-rocket-info',
  standalone: true,
  imports: [],
  templateUrl: './rocket-info.component.html',
  styleUrl: './rocket-info.component.scss'
})
export class RocketInfoComponent implements OnInit {
  // Imports and outputs
  @Input() rocket:IRocket|undefined;

  // Properties

  // Constrcutors

  // Methods
  ngOnInit(): void {
    console.log("rocket-info.component" + this.rocket)
  }

  protected GoToRocketArticle() {
    let target = "_blank";

    window.open(this.rocket?.wikipedia, target);
  }
}
