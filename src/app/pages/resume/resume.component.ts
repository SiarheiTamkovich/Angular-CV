import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as experience from './json/experience.json';
import * as skills from './json/skills.json';
declare const anime: any;

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent { //implements OnInit, AfterViewInit {
  experience: object;
  skills: object;

  year = '4th';
  cgpa = '3.43';

  iframeHeight = 500;

  constructor() {
    this.experience = experience;
    this.skills = skills;
  }

  // ngOnInit() {
  //   const iframe = document.getElementById("iframe") as HTMLIFrameElement;
  //   this.iframeHeight = iframe.contentWindow.document.body.scrollHeight;
  //   console.log(this.iframeHeight)
  // }

  ngAfterViewInit() {
    // Wrap every letter in a span
    // const textWrapper = document.querySelector('.ml1 .letters') as HTMLSpanElement;
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

  (anime as any)
    .timeline({ loop: false })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el: any, i: number) => 70 * (i + 1),
      })
      .add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: (el: any, i: number, l: number) => 80 * (l - i),
      });
  }
}
