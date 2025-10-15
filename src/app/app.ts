import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header';
import { FooterComponent } from './core/components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'audio-project';

}
