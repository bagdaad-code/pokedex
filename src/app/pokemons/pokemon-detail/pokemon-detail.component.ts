import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {PageDetail} from "../models/pokemon-detail";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit , OnChanges{
  public pokemon ?: PageDetail;

  constructor(public pokemonService : PokemonService, private route: ActivatedRoute,   private location: Location) { }

  @Input()id: number = 1;  

  ngOnInit(): void {
    this.getPokemon()
  }
  
  ngOnChanges(){
    this.getPokemon()
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.id)
    
      .subscribe(monpokemon => this.pokemon = monpokemon);
  }

  goBack(): void {
    this.location.back();
  }
  
  goSound(): void{

    var audio = new Audio("assets/audio/"+this.id+".mp3");
    console.log(audio)
  audio.play();
  }
}

