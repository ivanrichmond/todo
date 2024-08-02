import React, { useContext, useState } from 'react'

import AppForm from '../designSystem/AppForm'
import { TodoContext } from '../contexts/TodoProvider'

const Search = () => {
    const { filter } = useContext(TodoContext)
    const [status, setStatus] = useState('all')
    // TODO: use options and see if I can get AppForm.Select to work.
    // AppForm.Select isn't working.  For some reason it complains that event.target.value is null.
    const options = [
        { key: 'a', text: 'All', value: 'all' },
        { key: 'i', text: 'Incomplete', value: 'incomplete' },
        { key: 'c', text: 'Complete', value: 'complete' },
    ]
    return(
        <AppForm >
            <AppForm.Group inline >
                <label htmlFor='status'>Status</label>
                {/* <AppForm.Select 
                defaultValue = 'All'
                name='status'
                onChange = {(event) => handleSelect(event)}
                options={options}
                placeholder='Status'
                width={16}
                /> */}
                <select
                onChange = {e => setStatus(e.target.value)}
                >
                    <option value='all'>all</option>
                    <option value='complete'>complete</option>
                    <option value='incomplete'>incomplete</option>
                </select>
                <AppForm.Button icon='search' onClick = {() => filter(status)}/>
            </AppForm.Group>
        </AppForm>
    )
}

export default Search