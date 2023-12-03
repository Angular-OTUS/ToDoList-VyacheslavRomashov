import { Component, EventEmitter, Output } from '@angular/core';
import { FilterPanelItems, localizedStatus, TodoItemStatus } from '../../shared/models';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  @Output() statusSelected: EventEmitter<string | null> = new EventEmitter<string | null>();

  statusFilterList: FilterPanelItems = [
    {id: null, name: localizedStatus(TodoItemStatus.ALL)},
    {id: TodoItemStatus.IN_PROGRESS, name: localizedStatus(TodoItemStatus.IN_PROGRESS)},
    {id: TodoItemStatus.COMPLETED, name: localizedStatus(TodoItemStatus.COMPLETED)},
  ]

  changeFilter(event: MatSelectChange) {
    this.statusSelected.emit(event.value)
  }


}
