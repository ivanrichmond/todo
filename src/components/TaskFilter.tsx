import React, { useContext } from 'react'

import AppInput from '../designSystem/AppInput'
import { TodoContext } from '../contexts/TodoProvider'

const Search = () => {
    const { setFilterStatus } = useContext(TodoContext)
    return(
        <div className = 'taskFilter'>
            Task
            <AppInput 
            action = {{
                color: 'blue',
                icon: 'search'
            }}
            disabled
            filter = {setFilterStatus} 
            placeholder = 'Under construction'
            />
        </div>
    )
}

export default Search