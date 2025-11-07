import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonGameComponent } from './pages/pokemon/pokemon-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PokemonGameComponent],
  template: `
    <main class="main">
      <app-pokemon-game></app-pokemon-game>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
