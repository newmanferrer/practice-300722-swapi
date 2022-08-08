import { ICharacter } from '../character';

export interface IPeople {
  count: number;
  next: null | string;
  previous: null | string;
  results: ICharacter[];
}
