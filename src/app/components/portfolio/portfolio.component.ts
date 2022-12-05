import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterModel } from 'src/app/models/filter-model';

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
  public filter: FilterModel = {
    isReact: false,
    isAngular: false,
    isWebpack: false,
    isNodeJS: false
  }

  faFilter = faFilter;

  constructor() { }

  public openSettingPanel() {
    this.isSettingPanelActive = !this.isSettingPanelActive;
  }

  public setFilter(data: string) {
    switch (data) {

      case 'React': 
        this.filter.isReact = !this.filter.isReact;
      break;

      case 'Angular': 
        this.filter.isAngular = !this.filter.isAngular;
      break;

      case 'Webpack': 
        this.filter.isWebpack = !this.filter.isWebpack;
      break;

      case 'NodeJS': 
        this.filter.isNodeJS = !this.filter.isNodeJS;
      break;

      default: 
      break;
    }
  }

}
