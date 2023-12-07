import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemViewComponent } from './todo-item-view/todo-item-view.component';
import { TodoCreateItemComponent } from './todo-create-item/todo-create-item.component';
import { ToDoListItemComponent } from './to-do-list-item-component/to-do-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemViewComponent,
    TodoCreateItemComponent,
    ToDoListItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterOutlet,
    MatProgressSpinnerModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    ToDoListItemComponent,
  ],
})
export class BacklogModule { }
