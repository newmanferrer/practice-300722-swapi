import { IStarShip } from '../starShip';

export interface IStarShips {
  count: number;
  next: null | string;
  previous: null | string;
  results: IStarShip[];
}
