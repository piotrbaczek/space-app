import {SpaceShip} from "./space-ship";
import {Pilot} from "./pilot";

export class FighterShip extends SpaceShip {

  constructor(pilot?: Pilot) {
    super('F16', '/assets/f16.png', pilot);
  }
}
