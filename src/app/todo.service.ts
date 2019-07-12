import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `api/todos`;
    }

    getTodos() {
        return this.http.get<Todo[]>(this.baseUrl);
    }

    createTodo(todo: Todo) {
        return this.http.post<Todo>(this.baseUrl, todo);
    }

    updateTodo(todo: Todo) {
        return this.http.put<Todo>(this.baseUrl, todo, {});
    }

    deleteTodo(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    selectAllTodos(todos: Todo[]) {
        return this.http.put<Todo[]>(`${this.baseUrl}/toggle-all`, todos);
    }
}
