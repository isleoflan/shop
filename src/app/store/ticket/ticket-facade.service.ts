import { AbstractShopApiService } from '@/api/abstract-shop-api.service';
import { TicketItemPayload } from '@/interfaces/payload/ticket-item-payload';
import { AppState } from '@/store/app.state';
import { FacadeService } from '@/store/facade.service';
import { TicketStoreSelectors, TicketStoreActions } from '@/store/ticket/index';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, filter, tap, switchMap, share, catchError, EMPTY, of, startWith, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketFacadeService extends FacadeService {

  private requireTickets$ = this.store.select(TicketStoreSelectors.selectTicketState).pipe(
    finalize(() => this.store.dispatch({ type: TicketStoreActions.loadTicketsCancel.type })),
    filter(({ isLoading, hasLoaded, error }) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({ type: TicketStoreActions.loadTickets.type })),
    switchMap(() => this.shopApiService.getTicket().pipe(
      tap((payload) => this.store.dispatch({ type: TicketStoreActions.loadTicketsSuccess.type, payload })),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch({ type: TicketStoreActions.loadTicketsFailure.type, error });
        return of(EMPTY);
      })
    )),
    share()
  );

  tickets$: Observable<TicketItemPayload[]> = this.muteFirst(
    this.requireTickets$.pipe(startWith(null)),
    this.store.select(TicketStoreSelectors.selectAll)
  );

  constructor(
    private store: Store<AppState>,
    private shopApiService: AbstractShopApiService
  ) {
    super();
  }
}
