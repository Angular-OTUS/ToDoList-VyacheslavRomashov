import { Component, EventEmitter, Output } from '@angular/core';
import { FilterPanelItems, TodoItemStatus } from '../models';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  @Output() statusSelected: EventEmitter<string | null> = new EventEmitter<string | null>();

  statusFilterList: FilterPanelItems = [
    {id: null, name: TodoItemStatus.ALL},
    {id: TodoItemStatus.IN_PROGRESS, name: TodoItemStatus.IN_PROGRESS},
    {id: TodoItemStatus.COMPLETED, name: TodoItemStatus.COMPLETED},
  ]

  changeFilter(event: MatSelectChange) {
    this.statusSelected.emit(event.value)
  }


}
