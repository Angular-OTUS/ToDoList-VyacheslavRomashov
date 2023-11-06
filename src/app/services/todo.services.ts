import { Injectable } from '@angular/core';
import { ToDoListItem, ToDoListItems } from '../components/models';
import { ToastService } from './toast.service';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private toastService: ToastService) {
  }
  public todoListItems: ToDoListItems = [
    {id: 1, text: 'Lorem Ipsum 1', description: 'Lorem Ipsum description 1', status: null},
    {id: 2, text: 'Lorem Ipsum 2', description: 'Lorem Ipsum description 2', status: null},
    {id: 3, text: 'Lorem Ipsum 3', description: 'Lorem Ipsum description 3', status: null},
  ]

  public addItem(value: string, description: string) {
    const max = Math.max.apply(0, this.todoListItems.map(item => item.id));
    this.todoListItems.push({id: max +1, text: value, description: description, status: null});
    this.toastService.showToast([description])
  }

  deleteItem(id: number) {
    const deletedItem = this.todoListItems.find((item:ToDoListItem) => item.id === id);
    if (deletedItem) {
      this.toastService.showToast([deletedItem.description])
    }
    this.todoListItems = this.todoListItems.filter((item:ToDoListItem) => item.id !== id);
  }

  updateItem(item: ToDoListItem) {
    this.todoListItems = this.todoListItems.map((todoListItem: ToDoListItem) => todoListItem.id !== item.id ? todoListItem : item);
    this.toastService.showToast([item.text])
  }
}
