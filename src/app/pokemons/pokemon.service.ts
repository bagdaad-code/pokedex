import { Injectable } from '@angular/core';
import { Pokemon } from "./models/pokemon.model";
import { PagedData } from "./models/paged-data.model";

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageDetail} from "./models/pokemon-detail";
import {Login} from "./models/paged-login";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  login ?: Observable<Login>
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

  PostConnexion(log : string , pass : string): Observable<Login>{
    this.login = this.http.post<Login>("http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/auth/login",{email:log,password:pass})
    return this.login;
  }

  getMyPokemon(hash : string): Observable<number[]> {
    const headers = new HttpHeaders().set('Authorization', "Bearer "+hash); 
    return  this.http.get<number[]>("http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team", { headers });
  }

  updateMyPokemons(pokemons : number[], hash : string){
    const headers = new HttpHeaders().set('Authorization', "Bearer "+hash); 
    const body=JSON.stringify(pokemons);
    return  this.http.put<number>("  http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/trainers/me/team", body,{headers})
  }



}
