import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoListItem } from '../models';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {

  @Input() public item!: ToDoListItem;
  @Output() deleteItemEvent: EventEmitter<number> = new EventEmitter<number>()

  deleteItem(id: number) {
    this.deleteItemEvent.emit(id)
  }
}
