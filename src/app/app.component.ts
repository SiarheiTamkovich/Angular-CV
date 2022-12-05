import { AfterViewInit, Component, HostListener } from '@angular/core';
import { OffsetElementsModel } from './models/scroll-model';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public offsetElements: OffsetElementsModel = {};
  public isArrowUpActive = false;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    const home = this.scrollService.getElementPosition('home');
    const about = this.scrollService.getElementPosition('about');
    const certificates = this.scrollService.getElementPosition('certificates');
    const portfolio = this.scrollService.getElementPosition('portfolio');
    const experience = this.scrollService.getElementPosition('experience');
    const contact = this.scrollService.getElementPosition('contact');

    this.offsetElements = {
      home,
      about,
      certificates,
      portfolio,
      experience,
      contact
    }
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    //console.log(scrollPosition)
    if (scrollPosition > 400) {
      this.isArrowUpActive = true;
    } else {
      this.isArrowUpActive = false;
    }
  }
}
