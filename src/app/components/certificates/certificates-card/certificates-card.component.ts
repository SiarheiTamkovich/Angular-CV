import { AfterViewInit, Component, ElementRef, HostListener, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import 'vanilla-tilt';
import { CertificateModel } from '../certificates.model';
declare const VanillaTilt: { init: (arg0: NodeListOf<Element>, arg1: { max: number; speed: number; }) => void; };

const styleOn = style({
  opacity: 1,
  transform: "translateY(0)"
})

const styleOff = style({
  opacity: 0,
  transform: "translateY(100%)"
})

@Component({
  selector: 'app-certificates-card',
  templateUrl: './certificates-card.component.html',
  styleUrls: ['./certificates-card.component.scss'],
  animations: [
    trigger('transitAnimationUp', [
      state('show', styleOn),
      state('hide', styleOff),
      transition('show => hide', animate('900ms ease-out')),
      transition('hide => show', animate('900ms ease-in'))
    ]),
  ],
})
export class CertificatesCardComponent implements AfterViewInit {

  @Input()
  public certificates!: CertificateModel[];

  state = 'hide'

  constructor(public element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    //console.log('componentPosition=', componentPosition, ' scrollPosition=', scrollPosition)
    if (scrollPosition >= componentPosition - 300) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

  ngAfterViewInit(): void {

    const cards = document.querySelectorAll(".certificates__card");

    VanillaTilt.init(cards, {
      max: 20,
      speed: 700,
    });
  }
}
