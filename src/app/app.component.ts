import { AbstractAuthApiService } from "@/api/abstract-auth-api.service";
import { LoginRequestDto } from "@/interfaces/dto/login-request-dto";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authApiService: AbstractAuthApiService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')
      && localStorage.getItem('refreshToken')
      && localStorage.getItem('expiration')
    ) {

    } else {
      // request new SSO Login Session
      const loginRequestDto: LoginRequestDto = {
        redirectURL: 'https://shop.isleoflan.ch'
      };
      this.authApiService.postLoginRequest(loginRequestDto).subscribe((payload) => {
        console.log(payload);
      });
    }
  }
}
