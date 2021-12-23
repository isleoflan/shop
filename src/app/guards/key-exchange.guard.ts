import { KeyExchangeDto } from '@/interfaces/dto/key-exchange-dto';
import { AuthFacadeService } from '@/store/auth/auth-facade.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, switchMap, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyExchangeGuard implements CanActivate {

  constructor(
    private authFacadeService: AuthFacadeService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot): Observable<boolean | UrlTree> {
    // exchange hash to access and refresh token
    console.log(route);
    console.log(snapshot);

    const keyExchangeDto: KeyExchangeDto = {
      token: route.paramMap.get('token') || ''
    };

    return this.authFacadeService.postKeyExchange(keyExchangeDto).pipe(
      switchMap(() => of(this.router.createUrlTree(['/']))),
      catchError(() => of(true))
    );
  }

}
