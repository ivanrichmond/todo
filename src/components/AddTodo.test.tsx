import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'

import AddTodo, { validateAddTodo } from './AddTodo';
import { NoticeProvider } from '../contexts/NoticeProvider'
import { TodoProvider } from '../contexts/TodoProvider'

describe('AddTodo', () => {
    /**
    * This is an extremely basic smoke test.
    * Passing is not meant to indicate that the component is working,
    * so much as failing indicates that something is seriously wrong with the component.
    */
    test('renders to do', () => {
        render(
            <TodoProvider>
                <NoticeProvider>
                    <AddTodo />
                </NoticeProvider>
            </TodoProvider>
        )
        const testText = screen.getByText(/new task/i)
        expect(testText).toBeInTheDocument()
    })

    // Functional test of form validation.
    test('validateAddTodo with valid parameters returns validate.isValid = true', () => {
        const validation = validateAddTodo('Write more unit tests', '8/6/2024')
        expect(validation.isValid).toBe(true)
    })

    // Test form submit.
    test('Click Add button with New Task and Due Date filled in; both fields should get cleared', () => {
        render(
            <TodoProvider>
                <NoticeProvider>
                    <AddTodo />
                </NoticeProvider>
            </TodoProvider>
        );

        // First, set test data in each field.

        // New Task is SUI, so the input is wrapped in a div, which has the data-testid.
        // However the placeholder is actually on the input.
        const newTask = screen.getByPlaceholderText(/new task/i)
        fireEvent.change(newTask, {target: {value: 'test'}})
        // byTestId works for Due Date, because I wrote the component! ;D
        const dueDate = screen.getByTestId('due-date') 
        // Because of the peculiarities of input type date, we need to enter it in YYYY-MM-DD format.
        fireEvent.change(dueDate, {target: {value: '2024-08-05'}})

        // Assert that the values are there to begin with.
        expect(newTask).toHaveValue('test')
        expect(dueDate).toHaveValue('2024-08-05')

        // Click the Add button
        const addButton = screen.getByTestId('add-button')
        fireEvent.click(addButton)

        // After Add is clicked, both fields should now be cleared.
        expect(newTask).toHaveValue('')
        expect(dueDate).toHaveValue('')
    })

    // Just make sure that the component starts out rendered as expected.
    test('AddTodo initial render snapshot', () => {
        const component = renderer.create(
            <TodoProvider>
                <NoticeProvider>
                    <AddTodo />
                </NoticeProvider>
            </TodoProvider>
        );
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})

