import { AuthFacadeService } from '@/store/auth/auth-facade.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, CanLoad, UrlTree, Router } from '@angular/router';
import { Observable, of, map, mergeAll } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivateChild, CanLoad {

  private isAccessTokenSet$: Observable<boolean> = this.authFacadeService.authState$.pipe(
    map((tokens) => Object.values(tokens).every((element) => element !== null))
  );

  constructor(
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet();
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet();
  }

  private isAccessTokenSet(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet$.pipe(
      map((state) => {
        if (state) {
          return of(true);
        } else {
          return this.authFacadeService.postLoginRequest().pipe(
            map((payload) => {
              return this.router.createUrlTree(['/redirect', { externalUrl: payload.data.redirect }]);
            })
          );
        }
      }),
      mergeAll(2)
    );
  }
}
