import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerInfo } from '../app/components/player/player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayerInfo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fabric');
}
