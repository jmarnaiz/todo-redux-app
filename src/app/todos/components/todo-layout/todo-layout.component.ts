import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../../todo.actions';

@Component({
    selector: 'app-todo-layout',
    templateUrl: './todo-layout.component.html',
    styleUrls: ['./todo-layout.component.css'],
})
export class TodoLayoutComponent implements OnInit {
    // public toggleAllCheck: FormControl;
    public completed: boolean;
    constructor(private store: Store<AppState>) {
        this.completed = false;
        // this.toggleAllCheck = new FormControl(false);
    }

    ngOnInit(): void {
        // this.toggleAllCheck.valueChanges.subscribe((value) => {
        // });
    }

    public toggleAll(): void {
        this.completed = !this.completed;
        this.store.dispatch(toggleAll({ completed: this.completed }));
    }
}
