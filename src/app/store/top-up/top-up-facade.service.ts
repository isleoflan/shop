import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { AppState } from '@/store/app.state';
import { FacadeService } from '@/store/facade.service';
import { TopUpStoreActions, TopUpStoreSelectors } from '@/store/top-up/index';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, filter, tap, switchMap, share, catchError, of, EMPTY, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopUpFacadeService extends FacadeService {

  private requireTopUp$ = this.store.select(TopUpStoreSelectors.selectTopUpState).pipe(
    finalize(() => this.store.dispatch({ type: TopUpStoreActions.loadTopUpCancel.type })),
    filter(({ isLoading, hasLoaded, error }) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({ type: TopUpStoreActions.loadTopUp.type })),
    switchMap(() => this.shopApiService.getTopUpId().pipe(
      tap((payload) => this.store
        .dispatch({ type: TopUpStoreActions.loadTopUpSuccess.type, payload: payload })),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch({ type: TopUpStoreActions.loadTopUpFailure.type, error });
        return of(EMPTY);
      })
    )),
    share()
  );

  topUpId$: Observable<string | null> = this.muteFirst(
    this.requireTopUp$.pipe(startWith(null)),
    this.store.select(TopUpStoreSelectors.selectTopUpId)
  );

  constructor(
    private store: Store<AppState>,
    private shopApiService: AbstractShopApiService
  ) {
    super();
  }
}
