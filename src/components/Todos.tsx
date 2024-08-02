import React from 'react'

import AddTodo from './AddTodo'
import Notice from './Notice'
import Search from './Search'
import TodoList from './TodoList'

const Todos = () => {
    return (
        <div className='Todos'>
            <Search />
            <AddTodo />
            <Notice />
            <TodoList />
        </div>
    )
}

export default Todos