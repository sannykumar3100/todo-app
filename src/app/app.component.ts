import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public todos: Todo[];
    public todo: Todo;
    public activeFilter: string;

    constructor() {
        this.todos = [];
        this.todo = new Todo();
        this.activeFilter = null;
        this.retriveTodos();
    }

    addTodo() {
        if (!this.todo.task) {
            return;
        }

        this.todos = [...this.todos, this.todo];
        this.todo = new Todo();
        this.storeTodos();
    }

    deleteTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        this.storeTodos();
    }

    toggleTodo(todo: Todo) {
        todo.checked = !todo.checked;
        this.storeTodos();
    }

    selectAll(event: Event) {
        if ((event.target as HTMLInputElement).checked) {
            this.todos = this.todos.map(todo => ({
                ...todo,
                checked: true
            }));
        } else {
            this.todos = this.todos.map(todo => ({
                ...todo,
                checked: false
            }));
        }
        this.storeTodos();
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.checked);
    }

    retriveTodos() {
        const todos = localStorage.getItem('todos');
        this.todos = JSON.parse(todos) || [];
    }

    storeTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}
