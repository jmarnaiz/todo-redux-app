import { createReducer, on } from '@ngrx/store';
import { initializeTodo, Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
    initializeTodo('Texto01'),
    initializeTodo('Texto02'),
    initializeTodo('Texto03'),
    initializeTodo('Texto04'),
];

// El operador 'map' crea un nuevo array, lo cual nos viene perfecto para no manipular el state original
export const todoReducer = createReducer(
    initialState,
    on(actions.createTodo, (state, { text }) => [...state, initializeTodo(text)]),
    on(actions.toggleTodo, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            } else return todo;
        });
    }),
    on(actions.deleteTodo, (state, { id }) => {
        // Filter devuelve un NUEVO array
        return state.filter((todo) => todo.id !== id);
        // const newState: Todo[] = [];

        // state.forEach((todo) => {
        //     if (todo.id != id) {
        //         newState.push(todo);
        //     }
        // });

        // return newState;
    }),
    on(actions.deleteCompletedTodo, (state) => state.filter((todo) => !todo.completed)),
    on(actions.toggleAll, (state, { completed }) => {
        return state.map((todo) => {
            return {
                ...todo,
                completed,
            };
        });
    })
);
