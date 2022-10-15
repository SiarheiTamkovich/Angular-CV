import { Component, ElementRef, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

const styleOn = style({
  opacity: 1,
  transform: "translateX(0)"
})

const styleLeftOff = style({
  opacity: 0,
  transform: "translateX(-100%)"
})

const styleRightOff = style({
  opacity: 0,
  transform: "translateX(100%)"
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('transitAnimationLeft', [
      state('show', styleOn),
      state('hide', styleLeftOff),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
    trigger('transitAnimationRight', [
      state('show', styleOn),
      state('hide', styleRightOff),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ],
})
export class AboutComponent {

  state = 'hide'

  constructor(public element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
}


