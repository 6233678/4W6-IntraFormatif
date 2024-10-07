import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  pokemon: Pokemon | null = null;

  constructor(public route: ActivatedRoute, public pokeApi: PokeapiService) { }

  async ngOnInit() {
    this.pokemon = await this.pokeApi.getSinglePkmn(this.route.snapshot.paramMap.get("pokemon")!)
  }

  favorite() {
    if (this.pokemon) {
      const favoritesString = localStorage.getItem("favorites");

      const favorites = (favoritesString ? JSON.parse(favoritesString) : []) as Pokemon[];

      favorites.push(this.pokemon)

      localStorage.setItem("favorites", JSON.stringify(favorites))
    }
  }
}
