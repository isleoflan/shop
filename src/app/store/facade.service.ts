import { Injectable } from '@angular/core';
import { Observable, combineLatest, distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  muteFirst<T, R>(first$: Observable<T>, second$: Observable<R>): Observable<R> {
    return combineLatest([first$, second$]).pipe(
      map(([, b]) => b),
      distinctUntilChanged()
    );
  }
}
