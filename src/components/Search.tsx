import React from 'react'

import AppForm from '../designSystem/AppForm'

const Search = () => {
    const options = [
        { key: 'a', text: 'All', value: 'all' },
        { key: 'i', text: 'Incomplete', value: 'incomplete' },
        { key: 'c', text: 'Complete', value: 'complete' },
    ]
    return(
        <AppForm >
            <AppForm.Group inline >
                <label htmlFor='status'>Status</label>
                <AppForm.Select 
                defaultValue = 'All'
                name='status'
                options={options}
                placeholder='Status'
                width={16}
                />
                <AppForm.Button icon='search' />
            </AppForm.Group>
        </AppForm>
    )
}

export default Search