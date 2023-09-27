import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItems } from '../models';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit{
  public value = '';

  public todoListItems: ToDoListItems = [
    {id: 1, text: 'Lorem Ipsum 1'},
    {id: 2, text: 'Lorem Ipsum 2'},
    {id: 3, text: 'Lorem Ipsum 3'},
  ]

  public isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }

  get isDisabledButton() {
    return this.value === '';
  }

  deleteItem(id: number) {
    this.todoListItems = this.todoListItems.filter((item:ToDoListItem) => item.id !== id);
  }

  addItem() {
    const max = Math.max.apply(0, this.todoListItems.map(item => item.id));
    this.todoListItems.push({id: max +1, text: this.value});
  }

}
