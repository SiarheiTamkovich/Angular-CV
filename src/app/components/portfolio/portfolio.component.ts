import { Component } from '@angular/core';

import projects from '../../../assets/json/projects.json'
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public projects: ProjectModel[] = projects;

  constructor() { }

}
