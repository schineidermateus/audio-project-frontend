import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear: number;
  locationInfo: string;

  socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/schineidermateus', 
      iconPath: '/assets/github.svg'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/mateus-schineider', 
      iconPath: '/assets/linkedin.svg'
    }
  ];

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.locationInfo = `${this.currentYear} © PDRE, Av. dos Sabiás, 330; CP 29166-630, Morada de Laranjeiras, Espírito Santo, Brasil`;
  }
}
