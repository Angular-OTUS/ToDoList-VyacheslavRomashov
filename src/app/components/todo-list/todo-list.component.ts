import { Component, OnInit } from '@angular/core';
import { ToDoListItem } from '../models';
import { TodoService } from '../../services/todo.services';
import { ToastService } from '../../services/toast.service';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit{
  public value = '';

  public description = '';

  public selectedItemId?: number;

  public isLoading = true;

  constructor(public todoService: TodoService,
              public toastService: ToastService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 500)
    this.toastService.showToast(this.todoService.todoListItems.map((item) => item.text))
  }

  get isDisabledButton() {
    return this.value === '';
  }

  get isNeedDisplayDescription() {
    return this.selectedItemId !== null;
  }

  onItemSelected(value: number) {
    this.selectedItemId = value;
  }

  onItemEdited(item: ToDoListItem) {
    this.todoService.updateItem(item)
  }

  getSelectedItemDescription() {
    const currentItem = this.todoService.todoListItems.find((item) => item.id === this.selectedItemId)
    return currentItem?.description ?? ''
  }

}
