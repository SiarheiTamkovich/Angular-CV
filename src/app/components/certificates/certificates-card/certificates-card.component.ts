import { Component, OnInit } from '@angular/core';

import 'vanilla-tilt';
declare const VanillaTilt: { init: (arg0: NodeListOf<Element>, arg1: { max: number; speed: number; }) => void; };

@Component({
  selector: 'app-certificates-card',
  templateUrl: './certificates-card.component.html',
  styleUrls: ['./certificates-card.component.scss']
})
export class CertificatesCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cards = document.querySelectorAll(".certificates__card");
    VanillaTilt.init(cards, {
      max: 20,
      speed: 600,
      // reverse: true,
    });
  }

}
