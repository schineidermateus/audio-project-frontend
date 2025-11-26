import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AUDIO_ROUTES } from '../../../core/constants/urls.constants';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  navItems = [
    { label: 'Juntar MP3', path: AUDIO_ROUTES.join },
    { label: 'Cortar MP3', path: AUDIO_ROUTES.cut },
    { label: 'Mixar Áudio', path: AUDIO_ROUTES.mix },
  ];
}
