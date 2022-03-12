import { Component, OnInit } from '@angular/core';
import {environment} from  '../../../environments/environment'
import {  EventEmitter, NgModule,  Output } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../models/pokemon.model";
import {Login} from "../models/paged-login";
import { waitForAsync } from '@angular/core/testing';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss']
})
export class TeamComponentComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }
  
  MyPokemons? : Pokemon[]

   ngOnInit() {
    this.GoConnexion().pipe(
      switchMap(tokens => this.getIdMyPokemon(tokens.access_token))
    ).subscribe( myPokemons =>  this.getMyPokemon(myPokemons[1]).subscribe(MyPokemons => console.log(MyPokemons)));
  
    
  }

  GoConnexion() {
    return this.pokemonService.PostConnexion(environment.email,environment.password)     
  }  

  getIdMyPokemon(access_token : string) {
    return this.pokemonService.getMyPokemon(access_token)    
  }    

  getMyPokemon(id : number) {
    return this.pokemonService.getPokemon(id)    
  }  

}
