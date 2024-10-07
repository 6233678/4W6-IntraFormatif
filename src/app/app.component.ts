import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SingleComponent } from './single/single.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SingleComponent, FavoritesComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
