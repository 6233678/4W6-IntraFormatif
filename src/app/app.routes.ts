import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component: ListComponent },
    { path: "single/:pokemon", component: SingleComponent, pathMatch: "prefix" },
    { path: "favorites", component: FavoritesComponent },
];
