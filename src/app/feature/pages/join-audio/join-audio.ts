import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-join-audio',
  templateUrl: './join-audio.html',
  imports: [],
  styleUrl: './join-audio.scss'
})
export class JoinAudioComponent {
  selectedFiles: File[] = [];
  private API_URL = '/api/join';

  private readonly http$ = inject(HttpClient);

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  uploadFiles(): void {
    if (this.selectedFiles.length < 2) {
      alert('Selecione pelo menos dois arquivos MP3.');
      return;
    }

    const formData = new FormData();

    // Adiciona cada arquivo ao FormData com o nome 'mp3Files' (que o Multer espera)
    this.selectedFiles.forEach(file => {
      formData.append('mp3Files', file, file.name);
    });

    // O responseType 'blob' é crucial para receber um arquivo binário
    this.http$.post(this.API_URL, formData, { responseType: 'blob' })
      .subscribe({
        next: (blob: Blob) => {
          // Usa o file-saver para salvar o arquivo baixado
          saveAs(blob, `audio-junto-${Date.now()}.mp3`);
          alert('Arquivos juntados e download iniciado!');
        },
        error: (err) => {
          console.error('Erro ao juntar áudios:', err);
          alert('Ocorreu um erro no processamento do áudio.');
        }
      });
  }
}