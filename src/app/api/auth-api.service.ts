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

  postLoginRequest(loginRequestDto: LoginRequestDto): Observable<Payload<LoginRequestPayload>> {
    return this.http.post<Payload<LoginRequestPayload>>('https://api.sso.isleoflan.ch/v1/auth/request', {params: {...loginRequestDto}}).pipe(first());
  }

}
