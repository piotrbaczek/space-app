import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {SpaceShipService} from "./space-ship.service";

@Injectable({
  providedIn: 'root'
})
export class DestructionGuard  {
  constructor(private spaceShipService: SpaceShipService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasSpaceShips = this.spaceShipService.hangarShips.getValue().length > 0;
    if (!hasSpaceShips) {
      alert('Nie ma statków w hangarze!');
      this.router.navigateByUrl('/');
    }
    return hasSpaceShips;
  }

}
