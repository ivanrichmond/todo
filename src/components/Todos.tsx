import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Todos = () => {
    return (
        <div className='Todos'>
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default Todos