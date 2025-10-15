import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private readonly http$ = inject(HttpClient);

  private MIX_URL = '/api/mix';

  private JOIN_URL = '/api/join';



  uploadAndMixFiles(selectedFiles: Array<File>): void {
    const formData = new FormData();
    
    // Adiciona os dois arquivos ao FormData com o nome 'mp3Files'
    selectedFiles.forEach(file => {
      formData.append('mp3Files', file, file.name);
    });

    this.http$.post(this.MIX_URL, formData, { responseType: 'blob' }).subscribe({
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


  uploadAndJoinFiles(selectedFiles: File[]): void {
    const formData = new FormData();

    // Adiciona cada arquivo ao FormData com o nome 'mp3Files' (que o Multer espera)
    selectedFiles.forEach(file => {
      formData.append('mp3Files', file, file.name);
    });

    // O responseType 'blob' é crucial para receber um arquivo binário
    this.http$.post(this.JOIN_URL, formData, { responseType: 'blob' })
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
