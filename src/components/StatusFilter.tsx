import React, { useContext } from 'react'

import AppSelect from '../designSystem/AppSelect'
import { TodoContext } from '../contexts/TodoProvider'

const Search = () => {
    const { setFilterStatus } = useContext(TodoContext)
    const options = [
        {value: 'all', text: 'all'},
        {value: 'complete', text: 'complete'},
        {value: 'incomplete', text: 'incomplete'},
    ]
    return(
        <AppSelect 
        className = 'status'
        label = 'Complete?' 
        filter = {setFilterStatus} 
        options = {options}
        tooltip = "Show all, complete, or incomplete tasks."
        />
    )
}

export default Search