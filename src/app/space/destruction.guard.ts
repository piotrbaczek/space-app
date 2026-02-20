import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync,
  RedirectCommand,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SpaceShipService } from './space-ship.service';

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard {
  constructor(
    private spaceShipService: SpaceShipService,
    private router: Router
  ) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;

    if (hasSpaceShips) {
      return true;
    }


    alert('Nie ma statków w hangarze!');

    return new RedirectCommand(this.router.parseUrl('/'), {
      skipLocationChange: true
    });
  }
}
