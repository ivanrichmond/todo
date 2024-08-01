import React from 'react'
import 'semantic-ui-css/semantic.min.css'

import Todos from './components/Todos'
import { TodoProvider } from './contexts/TodoProvider'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="header">Ivan's To Do List</header>
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
