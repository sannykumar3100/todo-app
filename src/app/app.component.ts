import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public todos: Todo[];
    public todo: Todo;
    public activeFilter: string;
    public binding: boolean;

    constructor(private todoservice: TodoService) {
        this.todos = [];
        this.todo = new Todo();
        this.activeFilter = null;
        this.binding = false;

        this.todoservice.getTodos().subscribe(data => {
            this.todos = data;
            this.checkSelectAllInput();
        });
    }

    addTodo() {
        if (!this.todo.task || this.todo.task.length <= 2) {
            return;
        }
        this.todoservice.createTodo(this.todo).subscribe(todo => {
            this.todos = [...this.todos, todo];
            this.todo = new Todo();
        });
    }

    deleteTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);
        this.todoservice.deleteTodo(todo.id).subscribe(() => {
            this.todos.splice(index, 1);
        });
    }

    toggleTodo(todo: Todo) {
        this.todoservice.updateTodo(todo).subscribe(
            () => {},
            () => {
                this.todo.checked = !this.todo.checked;
            }
        );
        this.checkSelectAllInput();
    }

    checkSelectAllInput() {
        const checkedTodos = this.todos.filter(todo => todo.checked);
        if (
            checkedTodos.length > 0 &&
            checkedTodos.length === this.todos.length
        ) {
            this.binding = true;
        } else {
            this.binding = false;
        }
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
        this.todoservice.selectAllTodos(this.todos).subscribe(() => {});
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.checked);
    }
}
