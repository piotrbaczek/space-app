import {Component, ViewChild} from '@angular/core';
import {Pilot} from "../pilot";
import {PilotRoomComponent} from "../pilot-room/pilot-room.component";
import {SpaceShipService} from "../space-ship.service";
import {SpaceShip} from "../space-ship";

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent {
  name: string = 'A11';
  selectedPilot: Pilot = null;

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  spaceShips = this.spaceShipService.hangarShips;

  constructor(private spaceShipService: SpaceShipService) {

  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  unAssignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  onSelected(pilot: Pilot) {
    this.selectedPilot = pilot;
  }
}
