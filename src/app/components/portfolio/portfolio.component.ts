import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterModel, FilterName } from 'src/app/models/filter-model';

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
  };
  public filterName = FilterName;

  faFilter = faFilter;

  constructor() { }

  public openSettingPanel() {
    this.isSettingPanelActive = !this.isSettingPanelActive;
  }

  public setFilter(data: FilterName) {
    switch (data) {

      case this.filterName.react:
        this.filter.isReact = !this.filter.isReact;
      break;

      case this.filterName.angular:
        this.filter.isAngular = !this.filter.isAngular;
      break;

      case this.filterName.webpack:
        this.filter.isWebpack = !this.filter.isWebpack;
      break;

      case this.filterName.nodejs:
        this.filter.isNodeJS = !this.filter.isNodeJS;
      break;

      default:
      break;
    }
  }

}
