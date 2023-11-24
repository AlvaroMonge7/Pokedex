import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  pokemon: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && !changes['name'].firstChange) {
      this.fetchPokemon();
    }
  }

  fetchPokemon() {
    this.pokemonService.getPokemon(this.name).pipe(
      catchError((error) => {
        return of(null);
      })
    ).subscribe((data) => {
      this.pokemon = data;
    });
  }

  getCardBackgroundColor() {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      const firstType = this.pokemon.types[0].type.name;
      switch (firstType) {
        case 'fire':
          return 'card-fire';
        case 'water':
          return 'card-water';
        case 'grass':
          return 'card-grass';
        case 'electric':
          return 'card-electric';
        case 'rock':
          return 'card-rock';
        case 'flying':
          return 'card-flying';
        case 'psychic':
          return 'card-psychic';
        case 'poison':
          return 'card-poison';
        case 'ice':
          return 'card-ice';
        case 'fighting':
          return 'card-fighting';
        case 'bug':
          return 'card-bug';
        case 'normal':
          return 'card-normal';
        case 'steel':
          return 'card-steel';
        case 'dragon':
          return 'card-dragon';
        case 'ghost':
          return 'card-ghost'; 
        case 'fairy':
          return 'card-fairy';
        case 'dark':
          return 'card-dark';
        case 'ground':
          return 'card-ground';
        default:
          return 'card-default';
      }
    }
    return 'card-default';
  }
  

  primeraMayuscula(text: string) {
    if (!text) {
      return ''; // O cualquier valor por defecto que prefieras
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
