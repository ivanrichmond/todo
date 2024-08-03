import React, { useContext } from 'react'

import AppButton from '../designSystem/AppButton'
import AppCheckbox from '../designSystem/AppCheckbox'
import AppTable from '../designSystem/AppTable'
import DueDateFilter from './DueDateFilter'
import StatusFilter from './StatusFilter'
import TaskFilter from './TaskFilter'
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
                    <AppButton color='red' icon='trash' onClick={() => deleteTodo(i)} />
                </AppTable.Cell>
            </AppTable.Row>
        )
    })

    return dataRows.length ? (
        <div className="TodoList">
            <AppTable celled striped>
                <AppTable.Header>
                    <AppTable.Row verticalAlign = 'top'>
                        <AppTable.HeaderCell width={2}>
                            <StatusFilter />
                        </AppTable.HeaderCell>
                        <AppTable.HeaderCell>
                            <TaskFilter />
                        </AppTable.HeaderCell>
                        <AppTable.HeaderCell width={2}>
                            <DueDateFilter />
                        </AppTable.HeaderCell>
                        <AppTable.HeaderCell className={'heading'} width={1}>
                            <span>Delete</span>
                        </AppTable.HeaderCell>
                    </AppTable.Row>
                </AppTable.Header>
                <AppTable.Body>
                    {dataRows}
                </AppTable.Body>
            </AppTable>
        </div>
    ) : (
        <p className='noneFound'>No tasks found.</p>
    )
}

export default ToDoList