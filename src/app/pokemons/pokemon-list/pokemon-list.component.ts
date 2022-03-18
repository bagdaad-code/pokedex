import { Component, EventEmitter, Inject, NgModule, OnInit, Output } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../models/pokemon.model";
import { concat } from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {



  @Output() PokemonSelected:EventEmitter<number> = new EventEmitter<number>();
  OnPokemonSelected(id : number) {
    this.PokemonSelected.emit(id);    
  }


  constructor(private pokemonService : PokemonService) { }
  pokemons ?: Pokemon[];
  last = 0;
  text? : string;
  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemonService.getPokemons(0,0).subscribe(mespokemon => this.pokemons = mespokemon.data)
  }
  bol=false;

  onScrollDown(ev : any) {
    this.last=this.last+20;
  this.pokemonService.getPokemons(this.last,0).subscribe(mespokemon => this.pokemons = this.pokemons?.concat(mespokemon.data))
 
  }
  goThisPokemon(id : number){
    this.pokemonService.getPokemon(id);    
  }
  onSearchChange(){
    if(this.text)
    this.pokemonService.getPokemonSearch(this.text).subscribe(mespokemon => this.pokemons = mespokemon.data)
    this.pokemonService.getPokemons(0,0).subscribe(mespokemon => this.pokemons = mespokemon.data)
  }
}