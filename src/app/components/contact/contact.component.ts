import { Component, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ContactService } from '../../services/contact.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { animate, state, style, transition, trigger } from '@angular/animations';

const styleOn = style({
  opacity: 1,
  transform: "scale(1)"
})

const styleOff = style({
  opacity: 0,
  transform: "scale(0)"
})


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('scaleAnimation', [
      state('show', styleOn),
      state('hide', styleOff),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ]),
  ],
})
export class ContactComponent {

  form!: FormGroup;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  name: FormControl = new FormControl('', [Validators.required]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);

  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faPhone = faPhone;
  faDiscord = faDiscord;
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;

  state = 'hide';

  constructor(
    private builder: FormBuilder, 
    private contact: ContactService, 
    private element: ElementRef
    ) {
    this.form = this.builder.group({
      email: this.email,
      name: this.name,
      message: this.message,
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop
      //console.log('componentPosition = ', componentPosition);
    const scrollPosition = window.pageYOffset
      //console.log('scrollPosition = ', scrollPosition);
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show';
    } else {
      this.state = 'hide'
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(form: any) {
    //console.log(form);
    this.contact.PostMessage(form)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        //console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
