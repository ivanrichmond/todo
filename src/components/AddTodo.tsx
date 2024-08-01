import React from 'react'

import AppForm from '../designSystem/AppForm'

const AddToDo = () => {
    return(
        <AppForm >
            <AppForm.Group inline>
                <AppForm.Input label='New Task' placeholder='New Task' />
                <AppForm.Input label='Due Date' placeholder='Due Date' type='date' />
                <AppForm.Button icon='plus' />
            </AppForm.Group>
        </AppForm>
    )
}

export default AddToDo