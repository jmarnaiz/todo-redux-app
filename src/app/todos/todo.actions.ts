import { createAction, props } from '@ngrx/store';
import { TodoActionTypes } from './todo.actions-types';

export const createTodo = createAction(TodoActionTypes.CREATE, props<{ text: string }>());
export const toggleTodo = createAction(TodoActionTypes.TOGGLE, props<{ id: number }>());
export const editTodo = createAction(TodoActionTypes.EDIT, props<{ id: number; text: string }>());
export const deleteTodo = createAction(TodoActionTypes.DELETE, props<{ id: number }>());
export const deleteCompletedTodo = createAction(TodoActionTypes.DELETE_COMPLETED);
export const toggleAll = createAction(TodoActionTypes.TOGGLE_ALL, props<{ completed: boolean }>());
