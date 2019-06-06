import {Pilot} from "./pilot";

export abstract class SpaceShip {
  modelName: string = 'Goose';
  imageUrl: string = '/assets/f16.png';
  health: number = 55;
  activeShields: boolean = true;
  activeWeapons: boolean = false;
  pilot: Pilot;

  protected constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}
