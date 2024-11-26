import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createTodo } from '../../todo.actions';
import { AppState } from 'src/app/app.reducer';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
    public inputText: FormControl;
    constructor(private store: Store<AppState>) {
        this.inputText = new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(25),
        ]);
    }

    ngOnInit(): void {}

    public createTodo(): void {
        if (this.inputText.valid) {
            this.store.dispatch(createTodo({ text: this.inputText.value }));
            this.inputText.reset();
        }
    }
}
