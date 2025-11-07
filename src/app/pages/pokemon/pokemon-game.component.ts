import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-game.component.html',
  styleUrls: ['./pokemon-game.component.css']
})
export class PokemonGameComponent implements OnInit {
  pokemonId!: number;
  pokemonImage = '';
  options: string[] = [];
  correctAnswer = '';
  showPokemon = false;
  isCorrect = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon() {
    this.showPokemon = false;
    this.options = [];

    this.pokemonId = Math.floor(Math.random() * 150) + 1;

    const correctData = await this.pokemonService.getPokemon(this.pokemonId).toPromise();
    this.correctAnswer = correctData.name;
    this.pokemonImage = this.pokemonService.getImage(this.pokemonId);

    const optionSet = new Set<string>([this.correctAnswer]);

    while (optionSet.size < 4) {
      const randomId = Math.floor(Math.random() * 150) + 1;
      const data = await this.pokemonService.getPokemon(randomId).toPromise();
      optionSet.add(data.name);
    }

    this.options = Array.from(optionSet).sort(() => Math.random() - 0.5);
  }

  checkAnswer(answer: string) {
    this.showPokemon = true;
    this.isCorrect = answer === this.correctAnswer;
  }

  nextPokemon() {
    this.loadPokemon();
  }
}
