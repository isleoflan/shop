import { Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { IolAppTokenInterceptor } from "./iol-app-token.interceptor";
import { ApiInterceptor } from "./api.interceptor";
import { BaererInterceptor } from "./baerer.interceptor";

export const httpInterceptorProviders: Provider = [
  {provide: HTTP_INTERCEPTORS, useClass: IolAppTokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: BaererInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
];
