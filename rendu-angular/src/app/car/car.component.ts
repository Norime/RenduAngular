import { Component, OnInit } from '@angular/core';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'pr-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
    .subscribe(cars => this.cars = cars);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.carService.addCar({ name } as Car)
      .subscribe(car => {
        this.cars.push(car);
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(x => x !== car);
    this.carService.deleteCar(car.id).subscribe();
  }
}