import { Component, OnInit } from '@angular/core';
import { TodoAdd, ToDoListItem, ToDoListItems } from '../models';
import { TodoService } from '../../services/todo.services';
import { ToastService } from '../../services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';

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
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  onItemEdited(item: ToDoListItem) {
    this.todoService.editItem(item);
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

  onItemClick(item: ToDoListItem) {
    this.selectedItemId = item.id;
    this.router.navigate(['/tasks', item.id]);
  }
}
