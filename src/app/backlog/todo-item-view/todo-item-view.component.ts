import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToDoListItem } from '../../shared/models';

@Component({
  selector: 'app-todo-item-view',
  templateUrl: './todo-item-view.component.html',
  styleUrls: ['./todo-item-view.component.scss'],
})
export class TodoItemViewComponent implements OnInit {

  currentItem:ToDoListItem | null = null;

  constructor(private apiService: ApiService,
              private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.setItem(params['id']);
    })
  }

  setItem(id: number) {
    this.apiService.getTaskById(id!).subscribe(item => {
      this.currentItem = item;
    })
  }

}
