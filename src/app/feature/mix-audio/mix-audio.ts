import { Component, inject } from '@angular/core';
import { saveAs } from 'file-saver';
import { AudioService } from '../services/audio-service';

@Component({
  selector: 'app-mix-audio',
  imports: [
  ],
  templateUrl: './mix-audio.html',
  styleUrl: './mix-audio.scss'
})
export class MixAudioComponent {
  selectedFiles: File[] = [];

  readonly titulo = 'Mixar';

  private readonly service$ = inject(AudioService);

  onFileSelected(event: any): void {
    // Limita a seleção a no máximo 2 arquivos
    const files = Array.from(event.target.files);
    this.selectedFiles = files.slice(0, 2) as File[];
  }

  removeFile(index: number): void {
    if (index >= 0 && index < this.selectedFiles.length) {
      this.selectedFiles.splice(index, 1);
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles.length !== 2) {
      alert('Você deve selecionar exatamente dois arquivos MP3 para mixar.');
      return;
    }

    this.service$.uploadAndMixFiles(this.selectedFiles);
  }
}
