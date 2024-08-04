import React from 'react'

import AddTodo from './AddTodo'
import Notice from './Notice'
import TodoList from './TodoList'

const Todos = () => {
    return (
        <div className='Todos'>
            <AddTodo />
            <Notice />
            <TodoList />
        </div>
    )
}

export default Todos