import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ContactService } from '../../services/contact.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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

  constructor(private builder: FormBuilder, private contact: ContactService) {
    this.form = this.builder.group({
      email: this.email,
      name: this.name,
      message: this.message,
    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(form: any) {
    console.log(form);
    // this.contact.PostMessage(form)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm'
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({ error })
    //   })
  }


}
