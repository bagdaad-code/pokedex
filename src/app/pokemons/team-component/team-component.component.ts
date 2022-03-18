import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {environment} from  '../../../environments/environment'
import {PokemonService} from "../pokemon.service";
import { delay, switchMap } from 'rxjs';
import {PageDetail} from "../models/pokemon-detail";
@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss']
})
export class TeamComponentComponent implements OnInit,OnChanges  {

  constructor(private pokemonService : PokemonService) { }

  public MyPokemons ?: PageDetail [] =[] ;
  public MyPokemonsId ?: number [] =[] ;
  public access_token ?: string
  public text=""
  public isVisible ?: boolean = false;
  @Input()id: number = 1;  

  ngOnInit() {
    this.GoConnexion().pipe(
      switchMap(tokens =>
        this.getIdMyPokemon(tokens.access_token))
    ).subscribe( myPokemons  =>  {
        myPokemons.forEach( pokemon => {
          this.MyPokemonsId?.push(pokemon)
          this.getMyPokemon(pokemon).subscribe(MyPokemon => {
            this.MyPokemons?.push(MyPokemon) 
          }   );
          
        });
    }); 
  }
  
  ngOnChanges(){
    this.GoConnexion().pipe(
      switchMap(tokens =>
        this.getIdMyPokemon(tokens.access_token))
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
    this.access_token = access_token;
    return this.pokemonService.getMyPokemon(access_token)    
  }    

  getMyPokemon(id : number) {
    return this.pokemonService.getPokemon(id)    
  }  

  updateMyPokemon(MyPokemonsId : number[],access_token : string ){
    return(this.pokemonService.updateMyPokemons(MyPokemonsId,access_token) );
  }

  RemovePokemon(id : number) : void{
    if (this.MyPokemons){     
      for( var i = 0; i < this.MyPokemons.length; i++){ 
        if ( this.MyPokemons[i].id === id) { 
          this.MyPokemons.splice(i, 1); 
        }
      }
      if (this.MyPokemonsId){     
        for( var i = 0; i < this.MyPokemonsId.length; i++){ 
          if ( this.MyPokemonsId[i] === id) { 
            this.MyPokemonsId.splice(i, 1); 
          }
        }
      if(this.access_token)
      this.updateMyPokemon(this.MyPokemonsId,this.access_token).subscribe(nb => console.log(nb));
    }
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  OnPokemonSelected(id : number){
    if (this.MyPokemonsId){  
      if(this.MyPokemonsId.length==6){
        this.text="Deck Full !!"
        this.isVisible=true;
        console.log(this.isVisible);
        setTimeout(()=>{this.isVisible=true;}, 2000)
        setTimeout(()=>{this.isVisible=false;}, 2000)
        console.log(this.isVisible);
        
        return
      }

         
      for( var i = 0; i < this.MyPokemonsId.length; i++){ 
        if ( this.MyPokemonsId[i] === id) { 
          this.text= "Pokemon already there !!"
          this.isVisible=true;
          console.log(this.isVisible);
          setTimeout(()=>{this.isVisible=true;}, 2000)
          setTimeout(()=>{this.isVisible=false;}, 2000)
          console.log(this.isVisible);
          return
        }
      }

      this.MyPokemonsId.push(id);
      this.getMyPokemon(id).subscribe(MyPokemon => this.MyPokemons?.push(MyPokemon))
      if(this.access_token)
      this.updateMyPokemon(this.MyPokemonsId,this.access_token).subscribe();
    }
  }




//And call it
}
