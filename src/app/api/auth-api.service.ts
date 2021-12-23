import { KeyExchangeDto } from '@/interfaces/dto/key-exchange-dto';
import { LoginRequestDto } from '@/interfaces/dto/login-request-dto';
import { Payload } from '@/interfaces/payload';
import { KeyExchangePayload } from '@/interfaces/payload/key-exchange-payload';
import { LoginRequestPayload } from '@/interfaces/payload/login-request-payload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { AbstractAuthApiService } from './abstract-auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AbstractAuthApiService {

  ssoUrl = 'https://api.sso.isleoflan.ch/v1';

  constructor(private http: HttpClient) {
  }

  postLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>> {
    return this.http.post<Payload<LoginRequestPayload>>(
      this.ssoUrl + '/auth/request',
      { ...loginRequestDto }
    ).pipe(first());
  }

  postKeyExchange(keyExchangeDto: KeyExchangeDto): Observable<Payload<KeyExchangePayload>> {
    return this.http.post<Payload<KeyExchangePayload>>(
      this.ssoUrl + '/key/exchange',
      { ...keyExchangeDto }
    );
  }
}
