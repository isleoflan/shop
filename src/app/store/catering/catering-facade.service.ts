import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { CateringMenu, SpecialDeal } from '@/interfaces/payload/catering-payload';
import { AppState } from '@/store/app.state';
import { CateringStoreSelectors, CateringStoreActions } from '@/store/catering/index';
import { FacadeService } from '@/store/facade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, filter, tap, switchMap, catchError, EMPTY, of, share, Observable, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateringFacadeService extends FacadeService {

  private requireCatering$ = this.store.select(CateringStoreSelectors.selectCateringState).pipe(
    finalize(() => this.store.dispatch({ type: CateringStoreActions.loadCateringCancel.type })),
    filter(({ isLoading, hasLoaded, error }) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({ type: CateringStoreActions.loadCatering.type })),
    switchMap(() => this.shopApiService.getCatering().pipe(
      tap((payload) => this.store
        .dispatch({ type: CateringStoreActions.loadCateringSuccess.type, payload: payload })),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch({ type: CateringStoreActions.loadCateringFailure.type, error });
        return of(EMPTY);
      })
    )),
    share()
  );

  menusByDay$: Observable<CateringMenu[][]> = this.muteFirst(
    this.requireCatering$.pipe(startWith(null)),
    this.store.select(CateringStoreSelectors.selectMenusByDay)
  );

  allMenus$: Observable<CateringMenu[]> = this.muteFirst(
    this.requireCatering$.pipe(startWith(null)),
    this.store.select(CateringStoreSelectors.selectAll)
  );

  specialDeal$: Observable<SpecialDeal | null> = this.muteFirst(
    this.requireCatering$.pipe(startWith(null)),
    this.store.select(CateringStoreSelectors.selectSpecialDeal)
  );

  constructor(
    private store: Store<AppState>,
    private shopApiService: AbstractShopApiService
  ) {
    super();
  }
}
