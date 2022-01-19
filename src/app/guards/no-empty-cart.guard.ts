import { CartFacadeService } from '@/store/cart/cart-facade.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoEmptyCartGuard implements CanActivate, CanLoad {

  constructor(
    private cartFacadeService: CartFacadeService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.cartFacadeService.total$.pipe(
      map((total) => total > 0 ? true : this.router.createUrlTree(['/']))
    );
  }

  canLoad(): Observable<boolean | UrlTree> {
    return this.cartFacadeService.total$.pipe(
      map((total) => total > 0 ? true : this.router.createUrlTree(['/']))
    );
  }
}
