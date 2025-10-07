import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-mix-audio',
  imports: [],
  templateUrl: './mix-audio.html',
  styleUrl: './mix-audio.scss'
})
export class MixAudioComponent {

  selectedFiles: File[] = [];
  private API_URL = '/api/mix';

  private readonly http$ = inject(HttpClient);

  onFileSelected(event: any): void {
    // Limita a seleção a no máximo 2 arquivos
    const files = Array.from(event.target.files);
    this.selectedFiles = files.slice(0, 2) as File[];
  }

  uploadFiles(): void {
    if (this.selectedFiles.length !== 2) {
      alert('Você deve selecionar exatamente dois arquivos MP3 para mixar.');
      return;
    }

    const formData = new FormData();
    
    // Adiciona os dois arquivos ao FormData com o nome 'mp3Files'
    this.selectedFiles.forEach(file => {
      formData.append('mp3Files', file, file.name);
    });

    this.http$.post(this.API_URL, formData, { responseType: 'blob' })
      .subscribe({
        next: (blob: Blob) => {
          saveAs(blob, `audio-mixado-${Date.now()}.mp3`);
          alert('Mixagem concluída e download iniciado!');
        },
        error: (err) => {
          console.error('Erro ao mixar áudios:', err);
          alert('Ocorreu um erro no processamento da mixagem.');
        }
      });
  }
}
