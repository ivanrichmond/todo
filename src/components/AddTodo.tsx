import React, { useContext, useState } from 'react'

import AppForm from '../designSystem/AppForm'
import AppTooltip from '../designSystem/AppTooltip'
import { NoticeContext } from '../contexts/NoticeProvider'
import { TodoContext } from '../contexts/TodoProvider'
import { Task, DueDate } from '../classes/Todo'

const AddToDo = () => {
    // states
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    // contexts
    //TODO: Fix this typescript error.
    const { createNotice } = useContext(NoticeContext)
    const { addTodo } = useContext(TodoContext)

    const handleAdd = (task: Task, dueDate: DueDate) => {
        // Add, or error out.
        if(!task){
            // Error.
            createNotice("You did not fill in the task. ", 'error')
        } else if(!dueDate){
            // Error
            createNotice("You did set a due date. ", 'error')
        } else {
            // Convert DueDate to MM/DD/YYYY
            let formattedDueDate = dueDate
            let matches = dueDate.match(/(\d\d\d\d)-(\d\d)-(\d\d)/) // gets YYYY, MM, and DD out of it
            if(matches){
                formattedDueDate = `${matches[2]}/${matches[3]}/${matches[1]}` // puts it back together.
            }
            addTodo(task, formattedDueDate)
        }
    }

    return(
        <AppForm className = 'AddTodo'>
            <AppForm.Group inline>
                <AppTooltip
                content = "Enter a new task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Input 
                    label='New Task' 
                    placeholder='New Task' 
                    onChange = {(event) => setTask(event.target.value)}
                    />
                }
                />
                <AppTooltip
                content = "Enter the due date for the task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Input 
                    label='Due Date' 
                    placeholder='Due Date' 
                    type='date' 
                    onChange = {(event) => setDueDate(event.target.value)}
                    />
                }
                />
                <AppTooltip
                content = "Add task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Button 
                    color='blue' 
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