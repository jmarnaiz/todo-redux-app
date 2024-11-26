import { createReducer, on } from '@ngrx/store';
import { setFilter, ValidFilters } from './filter.actions';

export const initialState: ValidFilters = ValidFilters.ALL;

export const filterReducer = createReducer(
    initialState,
    on(setFilter, (state, { filter }) => filter)
);
