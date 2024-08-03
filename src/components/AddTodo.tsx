import React, { useContext, useState } from 'react'

import AppDate from '../designSystem/AppDate'
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
            addTodo(task, dueDate)
            // clear after adding
            setTask('')
            setDueDate('')
        }
    }

    return(
        <AppForm className = 'AddTodo'>
            <AppForm.Group inline>
                <label htmlFor="New Task">New Task</label>
                <AppTooltip
                content = "Enter a new task."
                inverted
                position = 'bottom center'
                trigger = {
                    <AppForm.Input 
                    onChange = {(event) => setTask(event.target.value)}
                    placeholder='New Task' 
                    value = {task}
                    />
                }
                />
                <AppDate 
                label='Due Date' 
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