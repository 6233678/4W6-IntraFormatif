import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  inputPkmn: string = "";

  constructor(public pokeApi: PokeapiService) { }

  ngOnInit() {
    this.pokeApi.getPkmnList();
  }

}
