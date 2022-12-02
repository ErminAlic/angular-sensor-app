import { Injectable } from '@angular/core';
import { Sensor } from '../Sensor';
import { Sensorendata } from '../Sensorendata';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public sensorenDaten: Sensorendata[] = [];
  public sensoren: Sensor[] = [];

  constructor() { }
}
