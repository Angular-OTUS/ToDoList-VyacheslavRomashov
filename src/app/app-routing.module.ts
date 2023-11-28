import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoListComponent } from './backlog/todo-list/todo-list.component';
import { TodoItemViewComponent } from './backlog/todo-item-view/todo-item-view.component';
import { BoardComponent } from './board/board-component/board.component';

const routes: Routes = [
  {
    path: 'backlog', component: TodoListComponent,
    children: [
      {path: ':id', component: TodoItemViewComponent},
    ],
  },
  {path: 'board', component: BoardComponent},
  {path: '', redirectTo: '/backlog', pathMatch: 'full'},
  {path: '**', redirectTo: '/backlog', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

