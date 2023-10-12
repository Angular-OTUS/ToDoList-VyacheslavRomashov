import { Component, OnInit } from '@angular/core';
import { ToDoListItem, ToDoListItems } from '../models';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements OnInit{
  public value = '';

  public description = '';

  public selectedItemId?: number;

  public todoListItems: ToDoListItems = [
    {id: 1, text: 'Lorem Ipsum 1', description: 'Lorem Ipsum description 1'},
    {id: 2, text: 'Lorem Ipsum 2', description: 'Lorem Ipsum description 2'},
    {id: 3, text: 'Lorem Ipsum 3', description: 'Lorem Ipsum description 3'},
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

  get isNeedDisplayDescription() {
    return this.selectedItemId !== null;
  }

  onItemSelected(value: number) {
    this.selectedItemId = value;
  }

  getSelectedItemDescription() {
    const currentItem = this.todoListItems.find((item) => item.id === this.selectedItemId)
    return currentItem?.description ?? ''
  }

  deleteItem(id: number) {
    this.todoListItems = this.todoListItems.filter((item:ToDoListItem) => item.id !== id);
  }

  addItem() {
    const max = Math.max.apply(0, this.todoListItems.map(item => item.id));
    this.todoListItems.push({id: max +1, text: this.value, description: this.description});
  }

}
