import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem('token')
      && localStorage.getItem('refreshToken')
      && localStorage.getItem('expiration')
    ) {

    } else {
      // request new SSO Login Session

    }
  }
}
