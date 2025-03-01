import React, { useContext, useState } from 'react'

import AppDate, { convertDate } from '../designSystem/AppDate'
import AppForm from '../designSystem/AppForm'
import AppTooltip from '../designSystem/AppTooltip'
import { NoticeContext } from '../contexts/NoticeProvider'
import { TodoContext } from '../contexts/TodoProvider'
import { Task, DueDate } from '../classes/Todo'

/**
 * Validates the data the user is about to add.
 * This function is abstracted from the component, in case it's useful to perform this validation
 * in other situations.
 */
export const validateAddTodo = (task: Task, dueDate: DueDate) => {
    type Validation = {isValid: boolean, error: string}
    // Return value with Boolean and optional error message.
    let validation: Validation = {isValid: true, error: ''}
    if(task === ''){
        validation = {isValid: false, error: 'You did not fill in the task.'}
    } else if(dueDate === ''){
        validation = {isValid: false, error: 'You did not fill in the due date.'}
    }
    return validation
}

const AddToDo = () => {
    // states
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    // contexts
    const { createNotice } = useContext(NoticeContext)
    const { addTodo } = useContext(TodoContext)

    const handleAdd = (task: Task, dueDate: DueDate) => {
        const validation = validateAddTodo(task, dueDate)
        // Add, or error out.
        if(!validation.isValid){
            // Error.
            createNotice(validation.error, 'error')
        } else {
            addTodo(task, convertDate(dueDate))
            // clear after adding
            setTask('')
            setDueDate('')
        }
    }

    return(
        <AppForm className = 'AddTodo'>
            <AppForm.Group inline>
                <label htmlFor="newTask" className='label'>New Task</label>
                <AppTooltip
                content = "Enter a new task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Input 
                    data-testid = 'new-task'
                    name = 'newTask'
                    onChange = {(event) => setTask(event.target.value)}
                    placeholder='New Task' 
                    value = {task}
                    />
                }
                />

                <AppDate 
                className = 'dueDate'
                name = 'due-date'
                label='Due Date' 
                labelClass = 'label'
                onChange = {setDueDate}
                tooltip = {"Enter the due date for the task."}
                value = {dueDate}
                />

                <AppTooltip
                content = "Add task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Button 
                    color='blue' 
                    data-testid = 'add-button'
                    icon='plus' 
                    onClick = {() => handleAdd(task, dueDate)}
                    />
                }
                />
            </AppForm.Group>
        </AppForm>
    )
}

export default AddToDo