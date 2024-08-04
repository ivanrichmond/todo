import React, { useContext } from 'react'

import AppInput from '../designSystem/AppInput'
import { TodoContext } from '../contexts/TodoProvider'

const DueDateFilter = () => {
    const { setFilterDueDate } = useContext(TodoContext)
    return(
        <div className = 'tableHeader'>
            Due Date
            <AppInput 
            onChange = {event => setFilterDueDate(event.target.value)} 
            type='date'
            />
        </div>
    )
}

export default DueDateFilter