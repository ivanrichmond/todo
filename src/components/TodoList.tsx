import React, { useContext } from 'react'

import AppButton from '../designSystem/AppButton'
import AppCheckbox from '../designSystem/AppCheckbox'
import AppTable from '../designSystem/AppTable'
import { TodoContext } from '../contexts/TodoProvider'
import { TodoType } from '../classes/Todo'

const ToDoList = () => {
    let { todos, deleteTodo, filterStatus, toggleComplete } = useContext(TodoContext)
    if(filterStatus !== 'all'){
        //TODO: Have something better than any for type of todo.
        // @ts-expect-error
        todos = todos.filter(todo => todo.status === filterStatus)
    }
    let dataRows = todos.map((todo: TodoType, i:number) => {
        return (
            <AppTable.Row key={i}>
                <AppTable.Cell collapsing className={todo.status}>
                    <AppCheckbox 
                    checked = {todo.status === 'complete'}
                    onChange = {() => toggleComplete(i)}
                    />
                </AppTable.Cell>
                <AppTable.Cell className={todo.status}>{todo.task}</AppTable.Cell>
                <AppTable.Cell className={todo.status}>{todo.dueDate}</AppTable.Cell>
                <AppTable.Cell className={todo.status}>
                    <AppButton icon='trash' onClick={() => deleteTodo(i)} />
                </AppTable.Cell>
            </AppTable.Row>
        )
    })

    return dataRows.length ? (
        <AppTable celled striped>
            <AppTable.Header>
                <AppTable.Row>
                    <AppTable.HeaderCell>Complete?</AppTable.HeaderCell>
                    <AppTable.HeaderCell>Task</AppTable.HeaderCell>
                    <AppTable.HeaderCell width={2}>Due Date</AppTable.HeaderCell>
                    <AppTable.HeaderCell width={1}>Delete</AppTable.HeaderCell>
                </AppTable.Row>
            </AppTable.Header>
            <AppTable.Body>
                {dataRows}
            </AppTable.Body>
        </AppTable>
    ) : (
        <p className='noneFound'>No tasks found.</p>
    )
}

export default ToDoList