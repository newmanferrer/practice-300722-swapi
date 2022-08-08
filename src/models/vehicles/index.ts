import { IVehicle } from '../vehicle';

export interface IVehicles {
  count: number;
  next: null | string;
  previous: null | string;
  results: IVehicle[];
}
