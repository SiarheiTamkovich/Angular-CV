import { FilterName } from "src/app/models/filter-model";

export interface ProjectModel {
  id: number,
  tags: string[],
  image: string,
  name: string,
  duration: string,
  description: string,
  url: string,
  source: string
}
