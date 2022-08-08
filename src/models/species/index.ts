import { ISpecie } from '../specie';

export interface ISpecies {
  count: number;
  next: null | string;
  previous: null | string;
  results: ISpecie[];
}
