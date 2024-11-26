import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { ValidFilters } from '../filter/filter.actions';

@Pipe({
    name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
    transform(todos: Todo[], filter: ValidFilters): Todo[] {
        switch (filter) {
            case ValidFilters.COMPLETED: {
                return todos.filter((todos) => todos.completed);
            }
            case ValidFilters.PENDING: {
                return todos.filter((todos) => !todos.completed);
            }
            default:
                return todos;
        }
    }
}
