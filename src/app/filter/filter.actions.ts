import { createAction, props } from '@ngrx/store';

export enum ValidFilters {
    ALL = 'all',
    COMPLETED = 'completed',
    PENDING = 'active',
}

export const setFilter = createAction('[FILTER] Set filter', props<{ filter: any }>());
