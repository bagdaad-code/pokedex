import { Injectable } from '@angular/core';
import { Pokemon } from "./models/pokemon.model";
import { PagedData } from "./models/paged-data.model";

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageDetail} from "./models/pokemon-detail";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http : HttpClient ) { }

  getPokemons(offset: number, limit: number) : Observable<PagedData>{
    return this.http.get<PagedData>("http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons?limit="+(20+limit)+"&offset="+offset)
  }

  getPokemon(id : number) : Observable<PageDetail>{
    return this.http.get<PageDetail>("http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons/"+id)
  }
  
  getPokemonSearch(param : string) : Observable<PagedData>{
    return this.http.get<PagedData>("http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons?search="+param)
  }

}
