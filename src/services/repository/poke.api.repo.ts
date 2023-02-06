import { PokeStructure } from '../../models/pokemon';

export class PokeApiRepo {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async loadTasks(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokeStructure[];
    console.log(data.results);
    const pokeArray = data.results;
    const promise = pokeArray.map(async (pokemon: any) => {
      const { url } = pokemon;
      const response = await fetch(url);
      return response.json;
    });

    const pokeData = await Promise.all(promise);
    const pokeStructure: any[] = pokeData.map((pokemon: any) => ({
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites,
    }));
    return pokeStructure;
  }
}
