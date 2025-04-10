import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';
  loading = false;
  error: any;

  constructor(private todoService: ApiService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      },
    });
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = { title: this.newTodoTitle, completed: false };
      this.todoService.createTodo(newTodo).subscribe(() => {
        this.fetchTodos();
        this.newTodoTitle = '';
      });
    }
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo.id!, todo).subscribe(() => {
      this.fetchTodos();
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.fetchTodos();
    });
  }
}