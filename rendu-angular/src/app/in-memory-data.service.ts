import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CarModel } from './car/car';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      { id: 1, name: 'Koopakar' },
      { id: 2, name: 'Bananice' },
      { id: 3, name: 'Celeroux' },
      { id: 4, name: 'Magmalourd' },
      { id: 5, name: 'Rubbarde' },
      { id: 6, name: 'Dynamite' },
      { id: 7, name: 'Roulette' },
      { id: 8, name: 'Trotinette' },
      { id: 9, name: 'LittleCar' }
    ];
    return {cars};
  }

  // Overrides the genId method to ensure that a car always has an id.
  // If the cars array is empty,
  // the method below returns the initial number (11).
  // if the cars array is not empty, the method below returns the highest
  // cars id + 1.
  genId(cars: CarModel[]): number {
    return cars.length > 0 ? Math.max(...cars.map(cars => cars.id)) + 1 : 11;
  }
}