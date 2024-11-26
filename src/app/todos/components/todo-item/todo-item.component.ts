import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { initializeTodo, Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @ViewChild('inputEdit') txtInputEdit!: ElementRef;

    public checkCompleted: FormControl;
    public txtInput: FormControl;

    public isEditing: boolean;
    constructor(private store: Store<AppState>) {
        this.todo = initializeTodo('');
        this.isEditing = false;
        this.checkCompleted = new FormControl(false);
        this.txtInput = new FormControl('', [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(25),
        ]);
    }

    ngOnInit(): void {
        this.checkCompleted.setValue(this.todo.completed);
        this.txtInput.setValue(this.todo.text);
        this.checkCompleted.valueChanges.subscribe(() =>
            this.store.dispatch(actions.toggleTodo({ id: this.todo.id }))
        );
    }

    public edit(): void {
        this.isEditing = true;
        setTimeout(() => {
            this.txtInputEdit.nativeElement.focus();
        }, 0);
    }

    public finishEdition(): void {
        const newValue = this.txtInput.value;
        this.isEditing = false;
        if (this.txtInput.valid && this.todo.text != newValue) {
            this.store.dispatch(actions.editTodo({ id: this.todo.id, text: newValue }));
        }
    }

    public delete(): void {
        this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
    }
}
