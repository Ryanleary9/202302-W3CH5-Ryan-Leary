import { PokeStructure } from '../../models/pokemon';
import { Pokemon } from '../../poke/poke';
import { PokeApiRepo } from '../../services/repository/poke.api.repo';
import { Component } from '../component/component';

export class PokeCard extends Component {
  constructor(public selector: string, public pokemonlist: PokeStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    return `
    <div class="poke-card">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png" alt="poke-card">
        <p>${this.pokemon.name}</p>
        <button class="dButton">Info</button>
        <button class="fButton">Favorite</button>
        </div>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
