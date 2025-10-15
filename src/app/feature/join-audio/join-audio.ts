import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { AudioService } from '../services/audio-service';

@Component({
  selector: 'app-join-audio',
  templateUrl: './join-audio.html',
  imports: [],
  styleUrl: './join-audio.scss'
})
export class JoinAudioComponent {
  selectedFiles: File[] = [];

  private readonly service$ = inject(AudioService);

  onFileSelected(event: any): void {
    for (const file of Array.from(event.target.files) as File[]) {
      this.selectedFiles.push(file);
    }
  }

  removeFile(index: number): void {
    if (index >= 0 && index < this.selectedFiles.length) {
      this.selectedFiles.splice(index, 1);
    }
  }

  uploadFiles(): void {
    if (this.selectedFiles.length < 2) {
      alert('Selecione pelo menos dois arquivos MP3.');
      return;
    }
    this.service$.uploadAndJoinFiles(this.selectedFiles);
  }
}