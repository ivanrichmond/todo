// Context for Todos array: [{task, dueDate, status}, ...]
import { createContext, ReactNode, useState } from 'react'
import Todo, { DueDate, Status, Task, TodoType } from '../classes/Todo'
import todosInitial from '../testData/todos.json'

export type TodoContextType = {
    todos?: TodoType[];
    addTodo?: (task: Task, dueDate: DueDate) => void;
    deleteTodo?: (index: number) => void;
    toggleComplete?: (index: number) => void;
    filter?: (status: Status) => void;
}

// TODO: Fix any.  For some reason, TodoContextType | null throws an error.
export const TodoContext = createContext<any>(null);

type TodoProviderProps = {
    children?: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    let initialData = todosInitial.map(todo => new Todo(todo.task, todo.dueDate, todo.status))

    const [todos, setTodos] = useState(initialData)
    const [filterStatus, setFilterStatus] = useState('all')
    
    // In the following methods, todos must be changed statelessly by making a copy and setting that.

    // add a new todo.
    const addTodo = (task: Task, dueDate: DueDate) => {
        const newTodo = new Todo(task, dueDate)
        let newTodos = [...todos]
        newTodos.push(newTodo)
        setTodos(newTodos)
    }

    // delete a todo, using index.
    const deleteTodo = (index: number) => {
        let newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }

    // set status to 'complete' on a todo, given index.
    const toggleComplete = (index: number) => {
        let newTodos = [...todos]
        newTodos[index].status = newTodos[index].status === 'complete' ? 'incomplete' : 'complete'
        setTodos(newTodos)
    }

    const values = {todos, addTodo, deleteTodo, toggleComplete, filterStatus, setFilterStatus}
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
