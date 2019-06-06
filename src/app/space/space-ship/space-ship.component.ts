import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {
  modelName: string = 'Goose';
  imageUrl: string = '/assets/f16.png';
  health: number = 55;
  activeShields: boolean = true;
  activeWeapons: boolean = false;

  constructor() {

  }

  // activateWeapons() {
  //   this.activeWeapons = true;
  // }

  ngOnInit() {
  }

}
