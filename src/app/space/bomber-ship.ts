import {SpaceShip} from "./space-ship";
import {Pilot} from "./pilot";

export class BomberShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('Boom', '/assets/bomber.png', pilot);
  }
}
