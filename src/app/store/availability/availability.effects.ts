import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { AvailabilityStoreActions } from '@/store/availability/index';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, mergeMap } from 'rxjs';


@Injectable()
export class AvailabilityEffects {

  reloadAvailabilities$ = createEffect(() => this.actions$.pipe(
    ofType(AvailabilityStoreActions.reloadAvailability.type),
    map(() => ({ type: AvailabilityStoreActions.loadAvailability.type }))
  ));

  loadAvailability$ = createEffect(() => this.actions$.pipe(
    ofType(AvailabilityStoreActions.loadAvailability.type),
    mergeMap(() => this.shopApiService.getAvailability().pipe(
        map((payload) => ({ type: AvailabilityStoreActions.loadAvailabilitySuccess.type, payload })),
        catchError((error: HttpErrorResponse) => of({
          type: AvailabilityStoreActions.loadAvailabilityFailure.type,
          error
        }))
      )
    )));

  constructor(
    private actions$: Actions,
    private shopApiService: AbstractShopApiService
  ) {
  }

}
