import { Sensor } from "./Sensor";

export interface Sensorendata {
    id: number;
    date: Date;
    temperature: number,
    humidity: number
    sensor: Sensor
  }