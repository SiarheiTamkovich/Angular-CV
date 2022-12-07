export interface FilterModel {
  isReact: boolean;
  isAngular: boolean;
  isWebpack: boolean;
  isNodeJS: boolean;
}

export enum FilterName {
  css = 'css',
  html = 'html',
  js = 'jave-script',
  react = 'React',
  webpack = 'Webpack',
  angular = 'Angular',
  nodejs = 'NodeJS'
};
