import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "./pokemons/pokemon-list/pokemon-list.component";
import { TeamComponentComponent } from './pokemons/team-component/team-component.component';


const routes: Routes = [
  {path : "", redirectTo: '/squad', pathMatch: 'full' },
  { path: 'pokemons/:id', component: PokemonDetailComponent },
  {path : "pokemons" , component : PokemonListComponent},
  {path : "pokedex" , component : PokedexComponent},
  {path : "squad", component : TeamComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
