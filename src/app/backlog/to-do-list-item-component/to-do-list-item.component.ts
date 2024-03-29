import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { TodoItemStatus, ToDoListItem } from '../../shared/models';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {

  @Input() public item!: ToDoListItem;

  @Input() public isView = false;

  @Input() public selectedItemId?: number;

  @Output() deleteItemEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() itemEdited: EventEmitter<ToDoListItem> = new EventEmitter<ToDoListItem>();

  onEdit = false;

  get isChecked() {
    return this.item.status === TodoItemStatus.COMPLETED
  }

  constructor(private apiService: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  deleteItem(id: number) {
    this.deleteItemEvent.emit(id)
  }

  @HostBinding('style.selected')
  get isItemSelected() {
    return this.item.id === this.selectedItemId;
  }

  onDblClick() {
    this.onEdit = true;
  }

  changeStatus(event: MatCheckboxChange) {
    const status = event.checked ? TodoItemStatus.COMPLETED : TodoItemStatus.IN_PROGRESS;
    this.apiService.changeStatus(this.item.id, status).subscribe((data => {
      data.status = status;
    }));
  }
}
