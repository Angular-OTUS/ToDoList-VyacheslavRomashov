import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItems } from '../../shared/models';
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
      this.allItems.forEach((item) => this.toastService.showToast(item.text))
    })
    setTimeout(() => {
      this.isLoading = false
    }, 500)

  }

  onItemEdited(item: ToDoListItem) {
    this.todoService.editItem(item);
  }

  onItemClick(item: ToDoListItem) {
    this.router.navigate([`/backlog/${item.id}`], {relativeTo: this.activatedRoute});
  }

  deleteItem(event: number) {
    this.todoService.deleteItem(event);
  }
}
