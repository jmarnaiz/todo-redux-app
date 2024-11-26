import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../../models/todo.model';
import { ValidFilters } from 'src/app/filter/filter.actions';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
    public todoList: Todo[];
    public currentFilter: ValidFilters;
    constructor(private store: Store<AppState>) {
        this.todoList = [];
        this.currentFilter = ValidFilters.ALL;
    }

    ngOnInit(): void {
        // this.store.select('todos').subscribe((todoList) => (this.todoList = todoList));
        this.store.subscribe(({ todos, filter }) => {
            this.todoList = todos;
            this.currentFilter = filter;
        });
    }
}
