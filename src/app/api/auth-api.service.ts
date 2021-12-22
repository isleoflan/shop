import { LoginRequestDto } from "@/interfaces/dto/login-request-dto";
import { Payload } from "@/interfaces/payload";
import { LoginRequestPayload } from "@/interfaces/payload/login-request-payload";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { first, Observable } from "rxjs";
import { AbstractAuthApiService } from "./abstract-auth-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AbstractAuthApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>> {
    return this.http.get<Payload<LoginRequestPayload>>('https://api.sso.isleoflan.ch/auth/request').pipe(first());
  }

}
