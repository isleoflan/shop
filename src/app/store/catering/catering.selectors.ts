import { CateringMenu, SpecialDeal } from '@/interfaces/payload/catering-payload';
import { AppState } from '@/store/app.state';
import { cateringFeatureKey, State, cateringEntityAdapter } from '@/store/catering/catering.reducer';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

const getSpecialDeal = (state: State) => state.specialDeal;

export const selectCateringState: MemoizedSelector<AppState, State> = createFeatureSelector<State>(cateringFeatureKey);
export const { selectAll } = cateringEntityAdapter.getSelectors(selectCateringState);

export const selectMenuCount: MemoizedSelector<AppState, number> = createSelector(
  selectCateringState,
  selectAll,
  (state, menus) => menus.length
);

export const selectSpecialDeal: MemoizedSelector<AppState, SpecialDeal | null> = createSelector(
  selectCateringState,
  getSpecialDeal
);

export const selectMenusByDay: MemoizedSelector<AppState, CateringMenu[][]> = createSelector(
  selectCateringState,
  selectAll,
  (state, entities) => {
    const entitiesDateMap: string[] = [];
    const entitiesSortedByDay: CateringMenu[][] = [];

    entities.forEach((menu) => {
      const dateId = `${ menu.date.getFullYear() }
      ${ menu.date.getMonth().toString().padStart(2, '0') }
      ${ menu.date.getDay().toString().padStart(2, '0') }`;

      const indexOfDateId = entitiesDateMap.indexOf(dateId);

      if (indexOfDateId === -1) {
        // date does not exist
        entitiesDateMap.push(dateId);
        entitiesSortedByDay.push([menu]);
      } else {
        // date does exist, so append it to the right date
        entitiesSortedByDay[indexOfDateId].push(menu);
      }
    });
    return entitiesSortedByDay;
  }
);
