import { Component, ElementRef, HostListener } from '@angular/core';

import certificates from '../../../assets/json/certificates.json';
import { CertificateModel } from './certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent {

  certificates: CertificateModel[] = certificates;

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
