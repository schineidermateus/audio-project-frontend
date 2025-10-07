import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';

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
  private API_URL = '/api/cut';

  private readonly http$ = inject(HttpClient);

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
    // O Multer no backend espera 'mp3File'
    formData.append('mp3File', this.selectedFile, this.selectedFile.name);
    // Campos de texto para o corpo da requisição (req.body)
    formData.append('startTime', this.startTime.toString());
    formData.append('duration', this.duration.toString());

    this.http$.post(this.API_URL, formData, { responseType: 'blob' })
      .subscribe({
        next: (blob: Blob) => {
          saveAs(blob, `audio-cortado-${this.startTime}-${this.duration}.mp3`);
          alert('Corte de áudio concluído e download iniciado!');
        },
        error: (err) => {
          console.error('Erro ao cortar áudio:', err);
          alert('Ocorreu um erro no processamento do áudio.');
        }
      });
  }
}
