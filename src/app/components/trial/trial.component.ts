import { Component, OnInit } from '@angular/core';
import { faFilm, faFan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent {

  faFilm = faFilm;
  faFan = faFan;
  isAnimated = false;

  constructor() { }

  isIntersecting (status: boolean, index: number) {
  //  console.log('Element #' + index + ' is intersecting ' + status)
  }

}
