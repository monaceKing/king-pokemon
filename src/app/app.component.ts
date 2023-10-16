import { Component, OnInit} from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon | undefined;

  ngOnInit() {
   console.table(this.pokemonList);
  //  this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemonId: string){
    const id = +pokemonId;
    const pokemon: Pokemon |undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    if (pokemon) {
      console.log(`vous avez demandé sur le pokemon ${pokemon.name}`);
      this.pokemonSelected  = pokemon;
    } else{
      console.log(`Le pokémon que vous avez demandé n'existe pas!`);
      this.pokemonSelected  = pokemon;
    }
}
}
 