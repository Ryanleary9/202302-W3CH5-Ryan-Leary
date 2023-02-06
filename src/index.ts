/* eslint-disable no-new */

import { Pokemon } from './poke/poke';
import { PokeApiRepo } from './services/repository/poke.api.repo';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tares', path: '/tasks' },
  { label: 'Acerca de', path: '/about.html' },
];

new Pokemon('main', new PokeApiRepo());
