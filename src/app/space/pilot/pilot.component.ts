import {Component, Input, OnInit} from '@angular/core';
import {Pilot} from "../pilot";

@Component({
    selector: 'app-pilot',
    templateUrl: './pilot.component.html',
    styleUrls: ['./pilot.component.css'],
    standalone: false
})
export class PilotComponent implements OnInit {
  @Input() pilot: Pilot;

  constructor() {
  }

  ngOnInit() {

  }

}
