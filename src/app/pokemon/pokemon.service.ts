import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private Http : HttpClient){}

  getPokemonList() : Observable<Pokemon[]> {
    return this.Http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokmeonById(pokemonId: number): Observable<Pokemon|undefined> {
    // return POKEMONS.find(pokemon => pokemon.id == pokemonId)
    return this.Http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  
  }

private log(response : Pokemon[]|Pokemon|undefined ){
  console.table(response);
}

private handleError(error: Error, errorValue: any){
  console.error(error);
  return of(errorValue);
}

  getPokemonTypeList() : string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Electrik", 
      "poison", 
      "Fée", 
      "Vol", 
      "Combat", 
      "Psy"
    ];
  }
}
