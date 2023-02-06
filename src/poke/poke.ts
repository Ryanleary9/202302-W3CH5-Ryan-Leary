import { PokeCard } from '../components/card/card';
import { Component } from '../components/component/component';
import { PokeStructure } from '../models/pokemon';
import { PokeApiRepo } from '../services/repository/poke.api.repo';

export class Pokemon extends Component {
  pokemonlist: any;
  constructor(public selector: string, public repo: PokeApiRepo) {
    super();
    this.pokemonlist = [];
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.load();
  }

  // Read
  async load() {
    this.pokemonlist = await this.repo.loadTasks();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemonlist.forEach((item) => {
      new PokeCard('ul', item);
    });
  }

  createTemplate() {
    return `<section class="tasks"><ul></ul></section>`;
  }
}
