import { Component, ElementRef, HostListener } from '@angular/core';
import { jobsModel } from './experience.model';

import jobs from '../../../assets/json/jobs.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  public jobs: jobsModel[] = jobs;
  public isComponentVisible: boolean = false;

  constructor(public element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    console.log(componentPosition, '--', scrollPosition)
    if (scrollPosition >= componentPosition) {
      this.isComponentVisible = true;
      console.log(this.isComponentVisible)
    }
  }
}
