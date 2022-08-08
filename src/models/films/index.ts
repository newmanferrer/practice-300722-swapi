import { IFilm } from '../film';

export interface IFilms {
  count: number;
  next: null | string;
  previous: null | string;
  results: IFilm[];
}
