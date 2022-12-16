import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ProjectModel } from '../portfolio.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

declare const VanillaTilt: { init: (arg0: NodeListOf<Element>, arg1: { max: number; speed: number; }) => void; };

const styleOn = style({
  opacity: 1,
})

const styleOff = style({
  opacity: 0,
})

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
  animations: [
    trigger('opacityAnimationUp', [
      state('show', styleOn),
      state('hide', styleOff),
      transition('show => hide', animate('900ms ease-out')),
      transition('hide => show', animate('900ms ease-in')),
    ]),
  ],
})
export class PortfolioCardComponent implements AfterViewInit, OnChanges {

  @Input() public projects!: ProjectModel[];
  @Input() public isSort!: boolean;

  ngOnChanges() {
    const cardBlock = this.element.nativeElement.childNodes[0].childNodes;

    for (let i = 0; i <= (cardBlock.length - 2); i++) {
      cardBlock[i].style.opacity = 0;
    }

    setTimeout(() => {
      for (let i = 0; i <= (cardBlock.length - 2); i++) {
        cardBlock[i].style.opacity = 1;
      }
    }, 200);
  }

  public state = 'hide';
  public tagDict = new Map([
    ['java-script', 'color-yellow'],
    ['html', 'color-orange'],
    ['css', 'color-green'],
    ['Webpack', 'color-blue'],
    ['Angular', 'is-primary'],
    ['React', 'is-primary'],
  ]);

  constructor(public element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetParent.offsetTop
    const scrollPosition = window.pageYOffset
    //console.log(this.element)
    //console.log('componentPosition=', componentPosition, ' scrollPosition=', scrollPosition)
    if (scrollPosition >= componentPosition - 300) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

  ngAfterViewInit(): void {
    const cards = document.querySelectorAll(".project-card");
    VanillaTilt.init(cards, {
      max: 10,
      speed: 500,
    });
  }

}
