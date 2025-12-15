import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AudioService } from '../services/audio-service';

@Component({
  selector: 'app-cut-audio',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './cut-audio.html',
  styleUrl: './cut-audio.scss'
})
export class CutAudioComponent {

  selectedFile: File | null = null;
  startTime: number | null = null; // Tempo de início em segundos
  duration: number | null = null; // Duração em segundos

  private readonly service$ = inject(AudioService);

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    } else {
      this.selectedFile = null;
    }
  }

  uploadAndCut(): void {
    if (!this.selectedFile || this.startTime === null || this.duration === null) {
      alert('Preencha todos os campos e selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('mp3File', this.selectedFile, this.selectedFile.name);
    formData.append('startTime', this.startTime.toString());
    formData.append('duration', this.duration.toString());

    this.service$.uploadAndCut(this.selectedFile, this.startTime, this.duration);
    this.selectedFile = null;
  }
}
