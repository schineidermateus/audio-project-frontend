import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AUDIO_ROUTES } from '../../constants/urls.constants';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Juntar Áudios (Concatenar)',
      description: 'Combine dois ou mais arquivos MP3 em uma única faixa de áudio contínua.',
      icon: 'M12 4v16m8-8H4', // SVG Path placeholder (Ícone de Junção)
      path: AUDIO_ROUTES.join,
      color: 'bg-indigo-500'
    },
    {
      title: 'Cortar e Extrair Segmento',
      description: 'Defina um tempo de início e uma duração para extrair um trecho exato de um MP3.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z', // SVG Path placeholder (Ícone de Corte)
      path: AUDIO_ROUTES.cut,
      color: 'bg-emerald-500'
    },
    {
      title: 'Mixar Áudios (Mesclagem)',
      description: 'Misture dois arquivos MP3 para que sejam reproduzidos simultaneamente, criando uma faixa sobreposta.',
      icon: 'M15.536 8.464l2.828-2.828A4 4 0 0012 3a4 4 0 00-2.828 1.172l-2.828 2.828m8.484 8.484l-2.828-2.828A4 4 0 0012 21a4 4 0 002.828-1.172l2.828-2.828z', // SVG Path placeholder (Ícone de Mixagem)
      path: AUDIO_ROUTES.mix,
      color: 'bg-rose-500'
    }
  ];
}
