import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  public getElementPosition(element: string) {
    const elementNode: HTMLElement | null = document.querySelector(`#${element}`);
    return elementNode?.offsetTop;
  }
}
