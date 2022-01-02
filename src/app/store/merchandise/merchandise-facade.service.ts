import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { AppState } from '@/store/app.state';
import { FacadeService } from '@/store/facade.service';
import { MerchandiseStoreSelectors, MerchandiseStoreActions } from '@/store/merchandise/index';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, filter, tap, switchMap, catchError, EMPTY, of, share, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseFacadeService extends FacadeService {

  private requireMerchandise$ = this.store.select(MerchandiseStoreSelectors.selectMerchandiseState).pipe(
    finalize(() => this.store.dispatch({ type: MerchandiseStoreActions.loadMerchandiseCancel.type })),
    filter(({ isLoading, hasLoaded, error }) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({ type: MerchandiseStoreActions.loadMerchandise.type })),
    switchMap(() => this.shopApiService.getMerchandise().pipe(
      tap((payload) => this.store.dispatch({ type: MerchandiseStoreActions.loadMerchandiseSuccess.type, payload })),
      catchError((error) => {
        this.store.dispatch({ type: MerchandiseStoreActions.loadMerchandiseFailure.type, error });
        return of(EMPTY);
      })
    )),
    share()
  );

  merchandise$ = this.muteFirst(
    this.requireMerchandise$.pipe(startWith(null)),
    this.store.select(MerchandiseStoreSelectors.selectAll)
  );


  constructor(
    private store: Store<AppState>,
    private shopApiService: AbstractShopApiService
  ) {
    super();
  }
}
