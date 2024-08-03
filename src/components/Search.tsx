import React, { useContext } from 'react'

import AppForm from '../designSystem/AppForm'
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
        <fieldset className='Search'>
            <legend>Filter by...</legend>
            <AppForm >  
                <AppForm.Group inline >
                    <AppSelect 
                    className = 'status'
                    label = 'Status' 
                    filter = {setFilterStatus} 
                    options = {options}
                    />
                </AppForm.Group>
            </AppForm>
        </fieldset>
    )
}

export default Search