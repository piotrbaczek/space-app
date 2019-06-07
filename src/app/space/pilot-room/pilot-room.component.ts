import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pilot} from "../pilot";

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  @Output() selected = new EventEmitter<Pilot>();

  constructor() {
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  ngOnInit() {
    this.pilots.push(new Pilot('Jan Kowalski'));
    this.pilots.push(new Pilot('Franek Nowak'));
    this.pilots.push(new Pilot('Ewa Nowak'));
  }
}
