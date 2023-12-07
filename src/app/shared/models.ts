import { $localize } from '@angular/localize/init';

export type ToDoListItem = {
  id: number,
  text: string,
  description: string,
  status: string | null,
}

export type ToDoListItems = Array<ToDoListItem>

export type TodoAdd = Omit<ToDoListItem, "id">;

export enum TodoItemStatus {
  IN_PROGRESS = 'InProgress',
  COMPLETED = 'Completed',
  ALL = 'ALL',
}

export function localizedStatus(state: TodoItemStatus) {
 const statusReadable: {[status in TodoItemStatus]:string} = {
   [TodoItemStatus.IN_PROGRESS]: $localize `key|In Progress`,
   [TodoItemStatus.COMPLETED]: $localize `key|Completed`,
   [TodoItemStatus.ALL]: $localize `key|ALL`,
 }
 return statusReadable[state]
}

export type FilterPanelItem = {
  id: string | null,
  name: string,
}
export type FilterPanelItems = Array<FilterPanelItem>
