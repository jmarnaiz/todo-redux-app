import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoLayoutComponent } from './todo-layout/todo-layout.component';
import { FilterPipe } from '../filter.pipe';

@NgModule({
    declarations: [
        TodoAddComponent,
        TodoFooterComponent,
        TodoItemComponent,
        TodoListComponent,
        TodoLayoutComponent,
        FilterPipe,
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [TodoLayoutComponent],
})
export class TodoModule {}
