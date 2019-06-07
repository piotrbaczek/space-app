import {Component, ViewChild} from '@angular/core';
import {SpaceShip} from "../space-ship";
import {Pilot} from "../pilot";
import {PilotRoomComponent} from "../pilot-room/pilot-room.component";

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent {
  name: string = 'A11';
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

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

  addProducedShip(spaceShip: SpaceShip) {
    this.spaceShips.push(spaceShip);
  }
}
