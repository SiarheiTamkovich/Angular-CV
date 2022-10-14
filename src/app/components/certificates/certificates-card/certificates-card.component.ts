import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import 'vanilla-tilt';
import { CertificateModel } from '../certificate.model';
declare const VanillaTilt: { init: (arg0: NodeListOf<Element>, arg1: { max: number; speed: number; }) => void; };

@Component({
  selector: 'app-certificates-card',
  templateUrl: './certificates-card.component.html',
  styleUrls: ['./certificates-card.component.scss']
})
export class CertificatesCardComponent implements AfterViewInit {

  @Input()
  public certificates!: CertificateModel[];

  constructor() { }

  ngAfterViewInit(): void {

    const cards = document.querySelectorAll(".certificates__card");

    VanillaTilt.init(cards, {
      max: 20,
      speed: 600,
    });
    //console.log(this.certificates)
  }

}
