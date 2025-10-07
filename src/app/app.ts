import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoinAudioComponent } from './feature/pages/join-audio/join-audio';
import { CutAudioComponent } from './feature/pages/cut-audio/cut-audio';

@Component({
  selector: 'app-root',
  imports: [
    JoinAudioComponent,
    CutAudioComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'audio-project';

}
