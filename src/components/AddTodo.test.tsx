import React from 'react';
import { render, screen } from '@testing-library/react';
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

    test('validateAddTodo with valid parameters returns validate.isValid = true', () => {
        const validation = validateAddTodo('Write more unit tests', '8/6/2024')
        expect(validation.isValid).toBe(true)
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

