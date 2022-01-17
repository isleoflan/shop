import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { ShopApiService } from '@/api/shop-api.service';
import { AppStoreModule } from '@/store/app-store.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractAuthApiService } from './api/abstract-auth-api.service';
import { AuthApiService } from './api/auth-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { RedirectComponent } from './pages/redirect/redirect.component';

@NgModule({
  declarations: [AppComponent, RedirectComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppStoreModule],
  providers: [
    httpInterceptorProviders,
    { provide: AbstractAuthApiService, useClass: AuthApiService },
    { provide: AbstractShopApiService, useClass: ShopApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
