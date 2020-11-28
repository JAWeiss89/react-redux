import React from 'react';
import TodoList from './TodoList';
import MemeGenerator from './MemeGenerator';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="section">
        <TodoList />
      </div>
      <div className="section">
        <MemeGenerator />
      </div>
    </div>
  );
}

export default App;
