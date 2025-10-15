import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    // GitHub: Aponta para um SVG simulado
    { name: 'GitHub', url: 'https://github.com/seuperfil', icon: 'github' },
    // LinkedIn: Aponta para um SVG simulado
    { name: 'LinkedIn', url: 'https://linkedin.com/in/seuperfil', icon: 'linkedin' },
  ];

  universityLink = {
    name: 'Minha Universidade',
    url: 'https://www.site-da-universidade.edu.br/'
  };
}
