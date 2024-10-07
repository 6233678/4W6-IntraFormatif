import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pkmnList: string[] = [];

  constructor(public http: HttpClient) { }

  getPkmnList(): void {
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/?limit=20").subscribe(x => {
      console.log(x);
      this.pkmnList = [];
      x.results.forEach((p: any) => {
        this.pkmnList.push(p.name);
      });
      console.log(this.pkmnList);
    });
  }

  async getSinglePkmn(name: string): Promise<Pokemon> {

    // Ceci devra être remplacé. Pour l'instant on retourne un Pokemon hardcodé
    const res = await lastValueFrom(this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`));

    console.log(res)

    return new Pokemon(res.id, res.species.name, res.sprites.front_default);

  }

}
