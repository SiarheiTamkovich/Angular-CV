import { Component, HostListener, Input } from '@angular/core';
import { OffsetElementsModel } from 'src/app/models/scroll-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  offsetElements!: OffsetElementsModel;

  public isSticky = false;

  public isAboutActive = false;
  public isCertificatesActive = false;
  public isPortfolioActive = false;
  public isExperienceActive = false;
  public isContactActive = false;

  public isBurgerActive = false;

  constructor() { }

  public burgerOpen() {
    this.isBurgerActive = !this.isBurgerActive;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    this.isSticky = scrollPosition >= 80;

    const {
      about,
      certificates,
      portfolio,
      experience,
      contact
    } = this.offsetElements;

    if (
      about !== undefined &&
      certificates !== undefined &&
      scrollPosition >= about &&
      scrollPosition < certificates
      ) {
          this.isAboutActive = true;
        } else {
      this.isAboutActive = false;
    }

    if (
      certificates !== undefined &&
      portfolio !== undefined &&
      scrollPosition >= certificates &&
      scrollPosition < portfolio
      ) {
          this.isCertificatesActive = true;
        } else {
      this.isCertificatesActive = false;
    }

    if (
      portfolio !== undefined &&
      experience !== undefined &&
      scrollPosition >= portfolio &&
      scrollPosition <= experience
      ) {
          this.isPortfolioActive = true;
        } else {
      this.isPortfolioActive = false;
    }

    if (
      experience !== undefined &&
      contact !== undefined &&
      scrollPosition > experience &&
      scrollPosition < contact
      ) {
          this.isExperienceActive = true;
        } else {
      this.isExperienceActive = false;
    }

    if (
      contact !== undefined &&
      scrollPosition >= contact
      ) {
          this.isContactActive = true;
        } else {
      this.isContactActive = false;
    }
  }
}
