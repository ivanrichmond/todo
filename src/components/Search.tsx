import React, { useContext } from 'react'

import AppForm from '../designSystem/AppForm'
import { TodoContext } from '../contexts/TodoProvider'

const Search = () => {
    const { setFilterStatus } = useContext(TodoContext)
    return(
        <AppForm >
            <AppForm.Group inline >
                <label htmlFor='status'>Status</label>
                <select
                className = 'ui selection dropdown'
                name = 'status'
                onChange = {e => setFilterStatus(e.target.value)}
                >
                    <option value='all'>all</option>
                    <option value='complete'>complete</option>
                    <option value='incomplete'>incomplete</option>
                </select>
            </AppForm.Group>
        </AppForm>
    )
}

export default Search