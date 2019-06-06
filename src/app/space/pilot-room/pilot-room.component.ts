import {Component, OnInit} from '@angular/core';
import {Pilot} from "../pilot";

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() {
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
  }

  ngOnInit() {
    this.pilots.push(new Pilot('Jan Kowalski'));
    this.pilots.push(new Pilot('Franek Nowak'));
    this.pilots.push(new Pilot('Ewa Nowak'));
  }

}
