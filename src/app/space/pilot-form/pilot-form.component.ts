import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {PilotService} from '../pilot.service';
import {PilotValidators} from '../pilot-validators';

@Component({
    selector: 'app-pilot-form',
    templateUrl: './pilot-form.component.html',
    styleUrls: ['./pilot-form.component.css'],
    standalone: false
})
export class PilotFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private route: ActivatedRoute,
              private pilotService: PilotService,
              private router: Router) {
  }

  save(): void {
    const pilotAttrs = this.form.value;
    this.pilotService.savePilot(pilotAttrs).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udało się zapisać pilota!')
    );
  }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data.pilot))
      .subscribe((pilot) => {
        this.form = new UntypedFormGroup({
          id: new UntypedFormControl(pilot.id),
          firstName: new UntypedFormControl(pilot.firstName, {
            validators: [Validators.required, PilotValidators.pilotName]
          }),
          lastName: new UntypedFormControl(pilot.lastName, {
            validators: [Validators.required],
            asyncValidators: [PilotValidators.pilotForbidden]
          }),
          imageUrl: new UntypedFormControl(pilot.imageUrl)
        }, {updateOn: 'blur'});
      });
  }

}
