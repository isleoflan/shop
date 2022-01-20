import { AppState } from '@/store/app.state';
import { AvailabilityStoreSelectors, AvailabilityStoreActions } from '@/store/availability/index';
import { FacadeService } from '@/store/facade.service';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { finalize, filter, tap, share, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityFacadeService extends FacadeService {

  private requireAvailability$ = this.store.select(AvailabilityStoreSelectors.selectAvailabilityState).pipe(
    finalize(() => this.store.dispatch({ type: AvailabilityStoreActions.loadAvailabilityFailure.type })),
    filter(({ isLoading, hasLoaded, error }) => !isLoading && !hasLoaded && error === null),
    tap(() => this.store.dispatch({ type: AvailabilityStoreActions.reloadAvailability.type })),
    share()
  );

  availability$ = this.muteFirst(
    this.requireAvailability$.pipe(startWith(null)),
    this.store.select(AvailabilityStoreSelectors.selectAvailability)
  );

  constructor(
    private store: Store<AppState>
  ) {
    super();
  }

  reloadAvailability() {
    this.store.dispatch({ type: AvailabilityStoreActions.reloadAvailability.type });
  }
}
