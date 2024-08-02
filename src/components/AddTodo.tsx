import React, { useContext, useState } from 'react'

import AppForm from '../designSystem/AppForm'
import { NoticeContext } from '../contexts/NoticeProvider'
import { TodoContext } from '../contexts/TodoProvider'
import { Task, DueDate } from '../classes/Todo'

const AddToDo = () => {
    // states
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    // contexts
    //TODO: Fix this typescript error.
    // @ts-expect-error
    const { createNotice } = useContext(NoticeContext)
    const { addTodo } = useContext(TodoContext)

    const handleAdd = (task: Task, dueDate: DueDate) => {
        if(!task){
            // Error.
            createNotice("You did not fill-in the task. ", 'error')
        } else if(!dueDate){
            // Error
            createNotice("You did set a due date. ", 'error')
        } else {
            addTodo(task, dueDate)
        }
    }

    return(
        <AppForm >
            <AppForm.Group inline>
                <AppForm.Input 
                label='New Task' 
                placeholder='New Task' 
                onChange = {(event) => setTask(event.target.value)}
                />
                <AppForm.Input 
                label='Due Date' 
                placeholder='Due Date' 
                type='date' 
                onChange = {(event) => setDueDate(event.target.value)}
                />
                <AppForm.Button icon='plus' onClick = {() => handleAdd(task, dueDate)}/>
            </AppForm.Group>
        </AppForm>
    )
}

export default AddToDo