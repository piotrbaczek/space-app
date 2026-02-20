import {Component} from '@angular/core';
import {SpaceShipType} from '../space-ship-type.enum';
import {ShipType} from '../ship-type';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {SpaceShipService} from '../space-ship.service';
import {map} from 'rxjs/operators';
import {OrderFormValue} from '../order-form-value';

@Component({
    selector: 'app-engineers-room',
    templateUrl: './engineers-room.component.html',
    styleUrls: ['./engineers-room.component.css'],
    standalone: false
})
export class EngineersRoomComponent {
  public isProducing: boolean;
  spaceShipTypes: ShipType[] = [
    {label: 'Fighter', value: SpaceShipType.Fighter},
    {label: 'Bomber', value: SpaceShipType.Bomber}
  ];

  form = new UntypedFormGroup({
    shipType: new UntypedFormControl(SpaceShipType.Fighter, {
      validators: [Validators.required]
    }),
    shipCount: new UntypedFormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)]
    })
  });

  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private  spaceShipService: SpaceShipService) {
  }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }
}
