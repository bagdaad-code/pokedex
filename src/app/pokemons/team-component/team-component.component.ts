import { Component, OnInit } from '@angular/core';
import {environment} from  '../../../environments/environment'
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../models/pokemon.model";
import { forkJoin, Observable, of } from "rxjs";

import { switchMap } from 'rxjs';
import {PageDetail} from "../models/pokemon-detail";
@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss']
})
export class TeamComponentComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }

  public MyPokemons ?: PageDetail [] =[] ;
  public MyPokemonsId ?: number [] =[] ;

  ngOnInit() {
    this.GoConnexion().pipe(
      switchMap(tokens =>
      
        this.getIdMyPokemon(tokens.access_token)
      )
    ).subscribe( myPokemons  =>  {
        myPokemons.forEach( pokemon => {
          this.MyPokemonsId?.push(pokemon)
          this.getMyPokemon(pokemon).subscribe(MyPokemon => {
            this.MyPokemons?.push(MyPokemon) 
          }   );
          
        });
    });    
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

  RemovePokemon(id : number) : void{
    if (this.MyPokemonsId){
      console.log(id);
      
      console.log(this.MyPokemonsId);
      
      for( var i = 0; i < this.MyPokemonsId.length; i++){ 
        if ( this.MyPokemonsId[i] === id) { 
          this.MyPokemonsId.splice(i, 1); 
        }
      }
      console.log(this.MyPokemonsId);
      
      // this.pokemonService.updateMyPokemons(this.MyPokemonsId,this.)   
    }
 

  }

}
