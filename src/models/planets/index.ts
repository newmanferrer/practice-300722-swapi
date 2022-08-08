import { IPlanet } from '../planet';

export interface IPlanets {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPlanet[];
}
