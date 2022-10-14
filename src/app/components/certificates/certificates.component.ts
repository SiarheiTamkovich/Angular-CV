import { Component } from '@angular/core';

import certificates from '../../../assets/json/certificates.json';
import { CertificateModel } from './certificate.model';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

  certificates: CertificateModel[] = certificates;

  constructor() { }

}
