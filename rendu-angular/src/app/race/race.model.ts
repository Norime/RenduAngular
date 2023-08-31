import { CarModel } from '../car/car';

export interface RaceModel {
  id: number;
  betCarId?: number;
  name: string;
  location: string;
  cars: Array<CarModel>;
  startInstant: string;
}