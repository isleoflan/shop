import { UserPayload } from '@/interfaces/payload/user-payload';
import { UserStoreActions } from '@/store/user/index';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { setUser } from '@sentry/angular';
import { tap } from 'rxjs';


@Injectable()
export class UserEffects {

  loadUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UserStoreActions.loadUserSuccess.type),
    tap((userPayload: UserPayload) => {
      setUser({
        email: userPayload.email,
        username: userPayload.username
      });
    })
  ), { dispatch: false });

  constructor(private actions$: Actions) {
  }

}
