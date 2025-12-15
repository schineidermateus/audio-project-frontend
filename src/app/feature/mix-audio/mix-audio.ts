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
    if(this.selectedFiles.length > 2) {
      alert('Só é possível selecionar 2 arquivos para mixage.');
      return;
    }

    for (const file of Array.from(event.target.files) as File[]) {
      if(this.selectedFiles.length >= 2) {
        alert('Só é possível selecionar 2 arquivos para mixage.');
        break;
      }

      this.selectedFiles.push(file);
    }
  }

  removeFile(index: number): void {
    if(index < 0 || index >= this.selectedFiles.length) {
      return;
    }
    
    const tempArray = this.selectedFiles;
    this.selectedFiles = [];

    for (let i = 0; i < tempArray.length; i++) {
      if (i !== index) {
        this.selectedFiles.push(tempArray[i]);
      }
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles.length !== 2) {
      alert('Você deve selecionar exatamente dois arquivos MP3 para mixar.');
      return;
    }

    this.service$.uploadAndMixFiles(this.selectedFiles);
    this.selectedFiles = [];
  }
}
