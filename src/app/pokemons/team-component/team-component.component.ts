import { Component, OnInit } from '@angular/core';
import {environment} from  '../../../environments/environment'
import {  EventEmitter, NgModule,  Output } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../models/pokemon.model";
import {Login} from "../models/paged-login";

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.scss']
})
export class TeamComponentComponent implements OnInit {

  constructor(private pokemonService : PokemonService) { }
  info ?: Login
  ngOnInit(): void {
  this.GoConnexion();
  }

  GoConnexion() {
    this.pokemonService.PostConnexion(environment.email,environment.password).subscribe(info => this.info = info)    
  }  
}
