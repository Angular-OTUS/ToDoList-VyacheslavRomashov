import { Component, OnInit } from '@angular/core';
import { TodoAdd, ToDoListItem, ToDoListItems } from '../models';
import { TodoService } from '../../services/todo.services';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {
  public value = '';

  public selectedItemId?: number;

  public isLoading = true;

  allItems: ToDoListItems = [];

  constructor(public todoService: TodoService,
              public toastService: ToastService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.todoService.getAllItems();
    this.todoService.allItems$.subscribe((items) => {
      this.allItems = items;
      this.toastService.showToast(this.allItems.map((item) => item.text))
    })
    setTimeout(() => {
      this.isLoading = false
    }, 500)

  }

  get isNeedDisplayDescription() {
    return this.selectedItemId !== null;
  }

  onItemSelected(value: number) {
    this.selectedItemId = value;
  }

  onItemEdited(item: ToDoListItem) {
    this.todoService.editItem(item);
  }

  getSelectedItemDescription() {
    const currentItem = this.allItems.find((item) => item.id === this.selectedItemId)
    return currentItem?.description ?? ''
  }

  statusSelected(status: string | null) {
    this.todoService.filterList(status)
  }

  addItem(event: TodoAdd) {
   this.todoService.addItem(event);
  }

  deleteItem(event: number) {
    this.todoService.deleteItem(event);
  }
}
