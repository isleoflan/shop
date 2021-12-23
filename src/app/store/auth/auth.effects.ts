import { setTokenCollection } from '@/store/auth/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';


@Injectable()
export class AuthEffects {

  setTokenCollection$ = createEffect(() => this.actions$.pipe(
    ofType(setTokenCollection.type),
    map(({ tokenCollection }) => {
      const { accessToken, refreshToken, expiration } = tokenCollection;

      window.localStorage.setItem('iol-access-token', accessToken);
      window.localStorage.setItem('iol-refresh-token', refreshToken);
      window.localStorage.setItem('iol-expiration', expiration);
    })
  ), { dispatch: false });

  constructor(private actions$: Actions) {
  }
}
