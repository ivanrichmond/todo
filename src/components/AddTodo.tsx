import React, { useContext, useState } from 'react'

import AppForm from '../designSystem/AppForm'
import { TodoContext } from '../contexts/TodoProvider'

const AddToDo = () => {
    // states
    const [task, setTask] = useState('')
    const [dueDate, setDueDate] = useState('')

    // contexts
    const { addTodo } = useContext(TodoContext)

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
                <AppForm.Button icon='plus' onClick = {() => addTodo(task, dueDate)}/>
            </AppForm.Group>
        </AppForm>
    )
}

export default AddToDo