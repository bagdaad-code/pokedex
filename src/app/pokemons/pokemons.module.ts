import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {FormsModule} from "@angular/forms";
import {MatList, MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatGridList, MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import {MatChipsModule} from '@angular/material/chips';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TeamComponentComponent } from './team-component/team-component.component';




@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    TeamComponentComponent,
  
  ],
  exports: [
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    RouterModule,
    InfiniteScrollModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
]
})

export class PokemonsModule { }
