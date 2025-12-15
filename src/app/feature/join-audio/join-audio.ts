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
    event.target.value = '';
  }

  removeFile(index: number): void {
    if(index < 0) {
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
    if (this.selectedFiles.length < 2) {
      alert('Selecione pelo menos dois arquivos MP3.');
      return;
    }
    this.service$.uploadAndJoinFiles(this.selectedFiles);
    this.selectedFiles = [];
  }
}