import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { ShopApiService } from '@/api/shop-api.service';
import { AppStoreModule } from '@/store/app-store.module';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localCH from '@angular/common/locales/de-CH';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractAuthApiService } from './api/abstract-auth-api.service';
import { AuthApiService } from './api/auth-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { HasOrderComponent } from './pages/has-order/has-order.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { SoldOutComponent } from './pages/sold-out/sold-out.component';

registerLocaleData(localCH);

@NgModule({
  declarations: [AppComponent, RedirectComponent, SoldOutComponent, HasOrderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppStoreModule],
  providers: [
    httpInterceptorProviders,
    { provide: AbstractAuthApiService, useClass: AuthApiService },
    { provide: AbstractShopApiService, useClass: ShopApiService },
    { provide: LOCALE_ID, useValue: 'de-CH' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'CHF' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
