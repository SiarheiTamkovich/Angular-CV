import { Component } from '@angular/core';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import projects from '../../../assets/json/projects.json'
import { ProjectModel } from './portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public projects: ProjectModel[] = projects;
  public isSettingPanelVisible = false;

  faSliders = faSliders;

  constructor() { }

  public openSettingPanel() {
    this.isSettingPanelVisible = !this.isSettingPanelVisible;
    console.log("open setting panel", this.isSettingPanelVisible)
  }

}
