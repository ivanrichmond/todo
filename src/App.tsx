import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Todos from './components/Todos'
import { NoticeProvider } from './contexts/NoticeProvider'
import { TodoProvider } from './contexts/TodoProvider'
import './App.css'

function App() {
  return (
    <div className="App">
      <NoticeProvider>
        <header className="header">Ivan's To Do List</header>
        <TodoProvider>
          <Todos />
        </TodoProvider>
      </NoticeProvider>
    </div>
  );
}

export default App;
