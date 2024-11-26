import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, ValidFilters } from 'src/app/filter/filter.actions';
import { deleteCompletedTodo } from '../../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
    public currentFilter: ValidFilters;
    public filters: ValidFilters[];
    public pendingTodos: number;
    public hasCompletedTodo: boolean;
    constructor(private store: Store<AppState>) {
        this.currentFilter = ValidFilters.ALL;
        this.filters = [ValidFilters.ALL, ValidFilters.COMPLETED, ValidFilters.PENDING];
        this.pendingTodos = 0;
        this.hasCompletedTodo = false;
    }

    ngOnInit(): void {
        // this.store.select('filter').subscribe((filter) => {
        //     this.currentFilter = filter;
        // });
        this.store.subscribe(({ filter, todos }) => {
            this.currentFilter = filter;
            this.pendingTodos = todos.filter((todo) => !todo.completed).length;
            this.hasCompletedTodo = todos.some((todo) => todo.completed);
        });
    }

    public setFilter(filter: any): void {
        this.store.dispatch(setFilter({ filter }));
    }

    public clearCompleted(): void {
        this.store.dispatch(deleteCompletedTodo());
    }
}
