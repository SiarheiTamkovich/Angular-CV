export interface FilterModel {
  isReact: boolean;
  isAngular: boolean;
  isWebpack: boolean;
  isNodeJS: boolean;
}

export enum FilterName {
  react = 'React',
  webpack = 'Webpack',
  angular = 'Angular',
  nodejs = 'NodeJS'
};
