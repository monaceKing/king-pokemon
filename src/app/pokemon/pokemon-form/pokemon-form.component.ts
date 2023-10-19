import { Component, Input, OnInit} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon: Pokemon;
  
  types: string[];
  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    ){}

  ngOnInit() {
    //PokemonTypeList
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type:string){
    const isCheked: boolean = ($event.target as HTMLInputElement).checked;

    if (isCheked) {
      this.pokemon.types.push(type);
    } else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }


  isTypesValid(type: string): boolean {
  //Si l'utlisateur a côché une seule case, il faut l'empecher de déselectionner cette case sinon car il faut au minimum une case cochée
    if (this.pokemon.types.length <= 1 && this.hasType(type)) {
      return false;
    }

    //Si l'utlisateur a déja selectinné 3, il faut l'empêcher de selectionner d'autre cases car c'est 3 cases a cocher au max
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit(){
    console.log('Submit form !');
    this.router.navigate(["/pokemon", this.pokemon.id]);
  }

}
