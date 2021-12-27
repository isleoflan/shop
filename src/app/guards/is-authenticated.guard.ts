import { AuthFacadeService } from '@/store/auth/auth-facade.service';
import { State } from '@/store/auth/auth.reducer';
import { Injectable } from '@angular/core';
import { CanActivateChild, CanLoad, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable, of, map, mergeAll } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivateChild, CanActivate, CanLoad {
  private authState$: Observable<State> = this.authFacadeService.authState$;

  constructor(
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet();
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet();
  }


  canLoad(): Observable<boolean | UrlTree> {
    return this.isAccessTokenSet();
  }

  private isAccessTokenSet(): Observable<boolean | UrlTree> {
    return this.authState$.pipe(
      map(({ accessToken, refreshToken, expiration, refreshStarted }) => {
        if (accessToken !== null && refreshToken !== null && expiration !== null) {
          if (!refreshStarted) {
            this.authFacadeService.initRenewOfAccessToken({ accessToken, refreshToken, expiration });
          }
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
