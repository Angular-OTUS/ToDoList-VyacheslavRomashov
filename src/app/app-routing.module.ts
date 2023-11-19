import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemViewComponent } from './components/todo-item-view/todo-item-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TodoListComponent,
    children: [
      {
        path: ':id',
        component: TodoItemViewComponent,
      },
    ]},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

