import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent implements OnInit {

  public isMoon = true;

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body');
    const toggle = document.getElementById('toggle');
    const moon = document.getElementById('moon');
    const sunBody = document.getElementById('sun');
    const beam1 = document.getElementById('beam1');
    const beam2 = document.getElementById('beam2');
    const beam3 = document.getElementById('beam3');
    const beam4 = document.getElementById('beam4');
    const beam5 = document.getElementById('beam5');
    const beam6 = document.getElementById('beam6');

    let isMoon = true;

    function toggleMode() {
      if (isMoon) {
        changeMoonToSun();
      }
      else {
        changeSunToMoon();
      }
    }

    function changeMoonToSun() {
      if (isMoon) {
        if (moon != null) moon.style.animation = 'hideMoon 1.5s linear';
        if (sunBody != null) sunBody.style.animation = 'revealSun 1.5s linear';
        if (beam1 != null) beam1.style.animation = 'revealSun 1.1s linear 0.4s';
        if (beam2 != null) beam2.style.animation = 'revealSun 1s linear 0.5s';
        if (beam3 != null) beam3.style.animation = 'revealSun 0.9s linear 0.6s';
        if (beam4 != null) beam4.style.animation = 'revealSun 0.8s linear 0.7s';
        if (beam5 != null) beam5.style.animation = 'revealSun 0.7s linear 0.8s';
        if (beam6 != null) beam6.style.animation = 'revealSun 0.6s linear 0.9s';
        isMoon = false;
        if (toggle != null) toggle.addEventListener('animationend', revealSun);
        if (body != null) body[0].classList.add('light');
      }
      return;
    }
    
    function revealSun() {
      if(!isMoon) {
        if (toggle != null) {
          toggle.title = 'Activate dark mode';
          toggle.ariaLabel = 'Activate dark mode';
        }
        if (moon != null) moon.style.transform = 'scale(0)';
        if (sunBody != null) sunBody.style.transform = 'scale(1)';
        if (beam1 != null) beam1.style.transform = 'scale(1)';
        if (beam2 != null) beam2.style.transform = 'scale(1)';
        if (beam3 != null) beam3.style.transform = 'scale(1)';
        if (beam4 != null) beam4.style.transform = 'scale(1)';
        if (beam5 != null) beam5.style.transform = 'scale(1)';
        if (beam6 != null) beam6.style.transform = 'scale(1)';
      }
      return;
    }
    
    function changeSunToMoon() {
      if (!isMoon) {
        if (sunBody != null) sunBody.style.animation = 'hideSun 0.5s linear';
        if (beam1 != null) beam1.style.animation = 'hideSun 0.5s linear';
        if (beam2 != null) beam2.style.animation = 'hideSun 0.5s linear';
        if (beam3 != null) beam3.style.animation = 'hideSun 0.5s linear';
        if (beam4 != null) beam4.style.animation = 'hideSun 0.5s linear';
        if (beam5 != null) beam5.style.animation = 'hideSun 0.5s linear';
        if (beam6 != null) beam6.style.animation = 'hideSun 0.5s linear';
        if (moon != null) moon.style.animation = 'revealMoon 1.5s linear';
        isMoon = true;
        if (toggle != null) toggle.addEventListener('animationend', revealMoon);
        if (body != null) body[0].classList.remove('light');
      }
      return;
    }
    
    function revealMoon() {
      if (isMoon) {
        if (toggle != null) {
          toggle.title = 'Activate light mode';
          toggle.ariaLabel = 'Activate light mode';
        }
        if (moon != null) moon.style.transform = 'scale(1) rotate(-45deg)';
        if (sunBody != null) sunBody.style.transform = 'scale(0)';
        if (beam1 != null) beam1.style.transform = 'scale(0)';
        if (beam2 != null) beam2.style.transform = 'scale(0)';
        if (beam3 != null) beam3.style.transform = 'scale(0)';
        if (beam4 != null) beam4.style.transform = 'scale(0)';
        if (beam5 != null) beam5.style.transform = 'scale(0)';
        if (beam6 != null) beam6.style.transform = 'scale(0)';
      }
      return;
    }
    
    if (toggle != null) toggle.addEventListener('click', toggleMode);
  }
}
