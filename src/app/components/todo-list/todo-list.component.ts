import { Component, OnInit } from '@angular/core';
import { TodoAdd, ToDoListItem, ToDoListItems } from '../models';
import { TodoService } from '../../services/todo.services';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit {
  public value = '';

  public description = '';

  public selectedItemId?: number;

  public isLoading = true;

  allItems: ToDoListItems = [];

  constructor(public todoService: TodoService,
              public toastService: ToastService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllItems()
    setTimeout(() => {
      this.isLoading = false
    }, 500)
    this.toastService.showToast(this.todoService.todoListItems.map((item) => item.text))
  }

  getAllItems() {
    this.apiService.getItems().subscribe(items => {
      this.allItems = items;
    })
  }

  get isNeedDisplayDescription() {
    return this.selectedItemId !== null;
  }

  onItemSelected(value: number) {
    this.selectedItemId = value;
  }

  onItemEdited(item: ToDoListItem) {
    this.apiService.putItem(item).subscribe(data => {
      this.getAllItems();
      this.toastService.showToast([data.text])
    })
  }

  getSelectedItemDescription() {
    const currentItem = this.todoService.todoListItems.find((item) => item.id === this.selectedItemId)
    return currentItem?.description ?? ''
  }

  statusSelected(status: string | null) {
    this.apiService.getItems().pipe(
      map( results => results.filter(r => status ? r.status === status : r) ),
    ).subscribe((data => {
      this.allItems = data;
    }));
  }

  addItem(event: TodoAdd) {
    this.apiService.postItem(event).subscribe((data => {
      this.getAllItems();
      this.toastService.showToast([data.text])
    }))
  }

  deleteItem(event: number) {
    this.apiService.deleteItem(event).subscribe(() => {
      this.getAllItems();
    })
  }
}
