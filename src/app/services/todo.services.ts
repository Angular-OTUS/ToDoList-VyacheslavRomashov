import { Injectable } from '@angular/core';
import { TodoAdd, ToDoListItem, ToDoListItems } from '../shared/models';
import { ToastService } from './toast.service';
import { ApiService } from './api.service';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private apiService: ApiService,
              public toastService: ToastService) {
  }

  private allItems = new BehaviorSubject<ToDoListItems>([] as ToDoListItems);
  allItems$ = this.allItems.asObservable();

  getAllItems() {
    return this.apiService.getItems().subscribe((items:ToDoListItems) => {
      this.allItems.next(items);
    });
  }

  addItem(event: TodoAdd) {
    return this.apiService.postItem(event).subscribe( {
      next: () => {
        this.getAllItems();
        this.toastService.showToast([event.text]);
      },
    })
  }

  deleteItem(event: number) {
    return this.apiService.deleteItem(event).subscribe({
      next: () => {
        this.getAllItems();
      },
    })
  }

  editItem(item: ToDoListItem) {
    return this.apiService.putItem(item).subscribe({
      next: () => {
        this.getAllItems();
        this.toastService.showToast([item.text]);
      },
    })
  }

  filterList(status: string | null) {
    this.apiService.getItems().pipe(
      map( results => results.filter(r => status ? r.status === status : r) ),
    ).subscribe((data => {
      this.allItems.next(data)
    }));
  }
}
