import { Component } from '@angular/core';
import { faFilm, faFan } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFilm = faFilm;
  faFan = faFan;
  isAnimated = false;

  ngOnInit() {
    const options = {
      strings: ['Innovation.', 'Discovery.'],
      typeSpeed: 200,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
}
