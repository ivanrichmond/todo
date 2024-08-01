import React from 'react';
import { TodoProvider } from './contexts/TodoProvider'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <header className="App-header">
          Ivan's To Do List
        </header>
      </TodoProvider>
    </div>
  );
}

export default App;
