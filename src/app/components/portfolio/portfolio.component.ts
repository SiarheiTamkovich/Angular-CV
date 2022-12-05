import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import projects from '../../../assets/json/projects.json'
import { ProjectModel } from './portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public projects: ProjectModel[] = projects;
  public isSettingPanelActive = false;

  faFilter = faFilter;

  constructor() { }

  public openSettingPanel() {
    this.isSettingPanelActive = !this.isSettingPanelActive;
  }

}
