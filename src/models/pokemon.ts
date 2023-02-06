import { Component } from '../components/component/component';

export type PokeStructure = {
  id: number;
  name: string;
  url: string;
  sprites: string;
};

export class Pokemon implements PokeStructure {
  public id: number;
  constructor(public name: string, public url: string, public sprites: string) {
    this.id = 0;
  }
}
