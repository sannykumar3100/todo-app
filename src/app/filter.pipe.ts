import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(todos: Todo[], current: string) {
        if (!current) {
            return todos;
        }

        if (current === 'ACTIVE') {
            return todos.filter(todo => !todo.checked);
        }

        return todos.filter(todo => todo.checked);
    }
}
