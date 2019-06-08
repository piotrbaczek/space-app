import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Pilot} from "./pilot";
import {Observable, of} from "rxjs";
import {PilotService} from "./pilot.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PilotResolver implements Resolve<Pilot> {

  constructor(private pilotService: PilotService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pilot> {
    if (route.params.id === 'new') {
      return of(new Pilot());
    } else {
      return this.pilotService.getPilot(route.params.id);
    }
  }

}
