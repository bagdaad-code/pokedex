import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  id_pokemon : number = 1;

  constructor() { }
  
  ngOnInit(): void {
      
  }
  OnPokemonSelected(id : number){
  this.id_pokemon = id;
  }
}
