import { UserFacadeService } from '@/store/user/user-facade.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, UrlTree, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoPreviousOrderGuard implements CanActivate, CanLoad {

  private user$ = this.userFacadeService.user$;

  constructor(
    private userFacadeService: UserFacadeService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.hasOrder();
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.hasOrder();
  }

  private hasOrder(): Observable<boolean | UrlTree> {
    return this.user$.pipe(
      filter((user) => user !== null),
      map((user) => {
        if (user && user.hasOrder) {
          return this.router.createUrlTree(['/has-order']);
        }
        return true;
      })
    );
  }
}
