import { IsAuthenticatedGuard } from '@/guards/is-authenticated.guard';
import { KeyExchangeGuard } from '@/guards/key-exchange.guard';
import { InjectionToken, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './pages/redirect/redirect.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'shop',
    canLoad: [
      IsAuthenticatedGuard
    ],
    canActivate: [
      IsAuthenticatedGuard
    ],
    canActivateChild: [
      IsAuthenticatedGuard
    ],
    loadChildren: () => import('./pages/shop/shop.module').then((m) => m.ShopModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'auth/:token',
    canActivate: [KeyExchangeGuard],
    children: []
  },
  {
    path: 'sold-out',
    loadChildren: () => import('./pages/sold-out/sold-out.module').then((m) => m.SoldOutModule)
  },
  {
    path: 'has-order',
    loadChildren: () => import('./pages/has-order/has-order.module').then((m) => m.HasOrderModule)
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    canActivate: [externalUrlProvider]
  },
  {
    path: '**',
    redirectTo: 'shop'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        if (externalUrl) {
          window.open(externalUrl, '_self');
        }
      }
    }
  ]
})
export class AppRoutingModule {
}
