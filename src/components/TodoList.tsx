import React from 'react'

import AppCheckbox from '../designSystem/AppCheckbox'
import AppTable from '../designSystem/AppTable'

const ToDoList = () => {
    return(
        <AppTable celled striped>
            <AppTable.Header>
                <AppTable.Row>
                    <AppTable.HeaderCell>Complete?</AppTable.HeaderCell>
                    <AppTable.HeaderCell>Task</AppTable.HeaderCell>
                    <AppTable.HeaderCell width={2}>Due Date</AppTable.HeaderCell>
                </AppTable.Row>
            </AppTable.Header>
            <AppTable.Body>
                <AppTable.Row>
                    <AppTable.Cell collapsing>
                        <AppCheckbox />
                    </AppTable.Cell>
                    <AppTable.Cell>Lorem</AppTable.Cell>
                    <AppTable.Cell>8/5/2024</AppTable.Cell>
                </AppTable.Row>
                <AppTable.Row positive>
                    <AppTable.Cell collapsing>
                        <AppCheckbox checked />
                    </AppTable.Cell>
                    <AppTable.Cell>Ipsum</AppTable.Cell>
                    <AppTable.Cell>8/1/2024</AppTable.Cell>
                </AppTable.Row>
            </AppTable.Body>
        </AppTable>
    )
}

export default ToDoList