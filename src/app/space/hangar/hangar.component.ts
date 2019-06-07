import {Component, OnInit, ViewChild} from '@angular/core';
import {SpaceShip} from "../space-ship";
import {BomberShip} from "../bomber-ship";
import {FighterShip} from "../fighter-ship";
import {Pilot} from "../pilot";
import {PilotRoomComponent} from "../pilot-room/pilot-room.component";

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  name: string = 'A11';
  spaceShips: SpaceShip[] = [];
  selectedPilot: Pilot = null;

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  constructor() {
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  unAssignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

  ngOnInit() {
    this.spaceShips.push(new BomberShip(new Pilot('Piotr Bączek')));
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
  }

  onSelected(pilot: Pilot) {
    this.selectedPilot = pilot;
  }
}
