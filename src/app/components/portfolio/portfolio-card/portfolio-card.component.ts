import { Component, Input } from '@angular/core';
import { ProjectModel } from '../project.model';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {

  @Input() public projects!: ProjectModel[];

  constructor() { }

}
