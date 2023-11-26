import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemViewComponent } from './todo-item-view.component';

describe('TodoItemViewComponent', () => {
  let component: TodoItemViewComponent;
  let fixture: ComponentFixture<TodoItemViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemViewComponent],
    });
    fixture = TestBed.createComponent(TodoItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
