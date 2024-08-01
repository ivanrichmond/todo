// Context for Todos array: [{task, dueDate, status}, ...]
import { createContext, ReactNode } from 'react'
import Todo, { DueDate, Status, Task, TodoType } from '../classes/Todo'

export type TodoContextType = {
    todos: TodoType[];
    addTodo: (task: Task, dueDate: DueDate) => void;
    deleteTodo: (index: number) => void;
    markComplete: (index: number) => void;
    filter: (status: Status) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

type TodoProviderProps = {
    children?: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const todos: TodoType[]  = []
    
    // add a new todo.
    const addTodo = (task: Task, dueDate: DueDate) => {
        const todo = new Todo(task, dueDate)
        todos.push(todo)
    }

    // delete a todo, using index.
    const deleteTodo = (index: number) => {
        delete todos[index]
    }

    // set status to 'complete' on a todo, given index.
    const markComplete = (index: number) => {
        todos[index].complete()
    }

    // filter todos: currently only by status.
    // TODO: Make this work for dueDate and task.
    const filter = (status: Status) => {
        return todos.filter(todo => todo.status === status)
    }

    const values = {todos, addTodo, deleteTodo, markComplete, filter}
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
