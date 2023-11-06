import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoAdd, ToDoListItem, ToDoListItems } from '../components/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(public http: HttpClient) {
  }

  getItems(): Observable<ToDoListItems> {
    return this.http.get<ToDoListItems>('http://localhost:3000/todo');
  }

  postItem(data: TodoAdd): Observable<ToDoListItem> {
    return this.http.post<ToDoListItem>('http://localhost:3000/todo', data);
  }

  putItem(data: ToDoListItem): Observable<ToDoListItem> {
    return this.http.put<ToDoListItem>('http://localhost:3000/todo/' + data.id, data);
  }

  deleteItem(id: number): Observable<ToDoListItem> {
    return this.http.delete<ToDoListItem>('http://localhost:3000/todo/' + id);
  }

  changeStatus(id: number, status: string): Observable<ToDoListItem> {
    return this.http.patch<ToDoListItem>('http://localhost:3000/todo/' + id, {status: status});
  }

  getTaskById(id: number): Observable<ToDoListItem> {
    return this.http.get<ToDoListItem>('http://localhost:3000/todo/' + id);
  }
}
