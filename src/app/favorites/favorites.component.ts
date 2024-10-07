import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favorites: Pokemon[] = [];

  constructor() { }

  ngOnInit() {
    const favoritesString = localStorage.getItem("favorites");

    this.favorites = (favoritesString ? JSON.parse(favoritesString) : []) as Pokemon[]
  }

}
