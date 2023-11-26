import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.services';
import { ToDoListItems } from '../../shared/models';

@Component({
  selector: 'app-board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public tasks: ToDoListItems = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getAllItems();
    this.todoService.allItems$.subscribe((items) => {
      this.tasks = items;
    })
  }
}
