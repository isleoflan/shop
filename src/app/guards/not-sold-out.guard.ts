import { AvailabilityFacadeService } from '@/store/availability/availability-facade.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, UrlTree, Router } from '@angular/router';
import { Observable, map, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotSoldOutGuard implements CanActivate, CanActivateChild {

  private availability$ = this.availabilityFacadeService.availability$;

  constructor(
    private availabilityFacadeService: AvailabilityFacadeService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.hasTicketsAvailable();
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.hasTicketsAvailable();
  }

  private hasTicketsAvailable(): Observable<boolean | UrlTree> {
    return this.availability$.pipe(
      filter((availability) => availability !== null),
      map((availability) => {
        if (availability && availability.free > 0) {
          return true;
        }
        return this.router.createUrlTree(['/sold-out']);
      })
    );
  }

}
