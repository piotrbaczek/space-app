import {Component, EventEmitter, Output} from '@angular/core';
import {SpaceShipType} from "../space-ship-type.enum";
import {ShipType} from "../ship-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderFormValue} from "../order-form-value";
import {SpaceShip} from "../space-ship";
import {SpaceShipService} from "../space-ship.service";

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent {
  @Output() shipProduced = new EventEmitter<SpaceShip>();
  private isProducing: boolean;
  private spaceShipService: SpaceShipService;
  spaceShipTypes: ShipType[] = [
    {label: 'Fighter', value: SpaceShipType.Fighter},
    {label: 'Bomber', value: SpaceShipType.Bomber}
  ];

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required]
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)]
    })
  });

  constructor(spaceShipService: SpaceShipService) {
    this.spaceShipService = spaceShipService;
  }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
      .subscribe({
        next: (ship) => this.shipProduced.emit(ship),
        complete: () => this.isProducing = false
      });
  }
}
