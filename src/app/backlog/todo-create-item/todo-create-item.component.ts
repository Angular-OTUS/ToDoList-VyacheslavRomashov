import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { TodoAdd, TodoItemStatus } from '../../shared/models';


@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss'],
})
export class TodoCreateItemComponent {
  @Output() addItemEvent: EventEmitter<TodoAdd> = new EventEmitter<TodoAdd>();

  addForm = new FormGroup({
    text: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });


  get isDisabledButton() {
    return this.addForm.value['text'] === '';
  }

  constructor(private apiService: ApiService) {
  }

  addItem() {
    const data: TodoAdd = {
      text: this.addForm.value['text']!,
      description: this.addForm.value['description']!,
      status: TodoItemStatus.IN_PROGRESS,
    };
    this.addItemEvent.emit(data);
  }
}
