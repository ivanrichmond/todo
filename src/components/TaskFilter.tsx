import React, { useContext } from 'react'

import AppInput from '../designSystem/AppInput'
import { TodoContext } from '../contexts/TodoProvider'

const TaskFilter = () => {
    const { setFilterTask } = useContext(TodoContext)
    return(
        <div className = 'taskFilter'>
            Task
            <AppInput 
            onChange = {event => setFilterTask(event.target.value)} 
            placeholder = "Search by task name, as you type."
            />
        </div>
    )
}

export default TaskFilter