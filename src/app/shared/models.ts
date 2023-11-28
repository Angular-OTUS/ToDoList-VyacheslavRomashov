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

export type FilterPanelItem = {
  id: string | null,
  name: string,
}
export type FilterPanelItems = Array<FilterPanelItem>
