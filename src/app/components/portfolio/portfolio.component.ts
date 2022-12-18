import { Component } from '@angular/core';
import {
  faFilter,
  faFilterCircleXmark,
  faArrowDownShortWide,
  faArrowUpWideShort
} from '@fortawesome/free-solid-svg-icons';
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
  public isSortItems = false;
  public isFilterItems = false;
  public filter: FilterModel = {
    isReact: false,
    isAngular: false,
    isWebpack: false,
    isNodeJS: false
  };
  public filterName = FilterName;
  public filterTegs: string[] = [];

  faFilter = faFilter;
  faFilterCircleXmark = faFilterCircleXmark;
  faArrowDownShortWide = faArrowDownShortWide;
  faArrowUpWideShort = faArrowUpWideShort;

  constructor() { }

  public openSettingPanel() {
    this.isSettingPanelActive = !this.isSettingPanelActive;
  }

  public sortItems() {
    this.isSortItems = !this.isSortItems;
    !this.isSortItems ? this.projects.sort((a,b) => a.id - b.id) :
      this.projects.sort((a,b) => b.id - a.id);
  }

  public setFilter(data: FilterName) {

    switch (data) {
      case this.filterName.react:
        this.filter.isReact = !this.filter.isReact;
        if (this.filter.isReact) {
          this.filterTegs = [...this.filterTegs, this.filterName.react];
        } else {
          this.filterTegs = this.filterTegs.filter(teg => teg !== this.filterName.react);
        }
      break;

      case this.filterName.angular:
        this.filter.isAngular = !this.filter.isAngular;
        if (this.filter.isAngular) {
          this.filterTegs = [...this.filterTegs, this.filterName.angular];
        } else {
          this.filterTegs = this.filterTegs.filter(teg => teg !== this.filterName.angular);
        }
      break;

      case this.filterName.webpack:
        this.filter.isWebpack = !this.filter.isWebpack;
        if (this.filter.isWebpack) {
          this.filterTegs = [...this.filterTegs, this.filterName.webpack];
        } else {
          this.filterTegs = this.filterTegs.filter(teg => teg !== this.filterName.webpack);
        }
      break;

      case this.filterName.nodejs:
        this.filter.isNodeJS = !this.filter.isNodeJS;
        if (this.filter.isNodeJS) {
          this.filterTegs = [...this.filterTegs, this.filterName.nodejs];
        } else {
          this.filterTegs = this.filterTegs.filter(teg => teg !== this.filterName.nodejs);
        }
      break;
      default:
      break;
    }

    if (this.filterTegs.length !== 0) {
      this.projects = projects.filter(project => {
        project.tags.forEach(tag => {
          this.isFilterItems = this.filterTegs.includes(tag);
        });
        return this.isFilterItems;
      })
    }
  }
}
