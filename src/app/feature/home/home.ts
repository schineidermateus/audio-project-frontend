import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AUDIO_ROUTES } from '../../core/constants/urls.constants';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  functionCards = [
    {
      title: 'Juntar Áudios (Concatenar)',
      description: 'Combine dois ou mais arquivos MP3 em uma única faixa de áudio contínua.',
      icon: 'M12 4v16m8-8H4',
      path: AUDIO_ROUTES.join,
      color: 'bg-indigo-500'
    },
    {
      title: 'Cortar e Extrair Segmento',
      description: 'Defina um tempo de início e uma duração para extrair um trecho exato de um MP3.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
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

  featureCards = [
    { 
      title: 'Cortador de áudios MP3 realmente rápido', 
      description: 'A ferramenta oferece a você uma forma de cortar audios, inserindo o tempo desejado em segundos.', 
      icon: 'M13.5 10.5L21 3m-1.5 0h6m0 0v6M3 10.5h6m0 0v6m1.5-4.5h-3m3 0V15m0 0v1.5m0-1.5h-1.5M10.5 21v-6m0 0h-3m3 0v1.5m0-1.5h1.5M19.5 21v-6m0 0h-3m3 0v1.5m0-1.5h1.5',
      iconPath: 'scissors'
    },
    { 
      title: 'Ferramenta Superfácil de Usar', 
      description: 'A interface do cortador de áudio é totalmente intuitiva, assim, você não encontrará nenhum problema ao editar sua música.', 
      icon: 'M9 13H5M15 13H5M5 17h10M19 13a4 4 0 100-8 4 4 0 000 8zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z', 
      iconPath: 'mouse' 
    },
    { 
      title: 'Totalmente On-line', 
      description: 'Não há necessidade de baixar e instalar o cortador de música MP3 em seu computador Mac ou Windows, o que torna todo o processo muito mais rápido.', 
      icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 100-12 6 6 0 000 12zM12 16a4 4 0 110-8 4 4 0 010 8zM12 14a2 2 0 100-4 2 2 0 000 4zM16 12h.01M8 12h.01M16 12a4 4 0 100-8 4 4 0 000 8zM8 12a4 4 0 100-8 4 4 0 000 8z', 
      iconPath: 'world'
    },
    { 
      title: 'Mais Configurações', 
      description: 'Com a ferramenta, você também pode sobrepor audios, gerando uma nova faixa única.', 
      icon: 'M10 21h4M3 10l9-7 9 7M12 3v18', 
      iconPath: 'gear'
    },
    { 
      title: 'Compatível com MP3', 
      description: 'A plataforma permite que você trabalhe com MP3, sendo ele o formato de áudio mais comum no mercado.', 
      icon: 'M18 10h-2V7h2m-6 3h-2V7h2m-6 3H4V7h2m15 7H3V6h18a1 1 0 011 1v7zM12 21a9 9 0 100-18 9 9 0 000 18z', 
      iconPath: 'music' 
    },
    { 
      title: 'Totalmente Seguro', 
      description: 'Você não precisa se preocupar com outra pessoa ouvindo seu áudio, pois ninguém tem acesso aos seus arquivos carregados.', 
      icon: 'M12 11c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM12 20a8 8 0 100-16 8 8 0 000 16zM12 18a6 6 0 100-12 6 6 0 000 12zM12 16a4 4 0 110-8 4 4 0 010 8zM12 14a2 2 0 100-4 2 2 0 000 4z', 
      iconPath: 'shield'
    }
  ];
}
