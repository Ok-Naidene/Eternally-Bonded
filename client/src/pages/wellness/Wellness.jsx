import React, { useState } from 'react';
import './wellness.css';

export default function Wellness() {
  const [todos, setTodos] = useState([
    { text: 'Buy groceries', completed: false },
    { text: 'Exercise', completed: false },
    { text: 'Make your bed', completed: false },
  ]);
  const [todoInput, setTodoInput] = useState('');

  // Event handler for adding a task
  const addTask = () => {
    if (todoInput === '') {
      alert('Please enter a To-do item:');
    } else {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput('');
    }
  };

  // Event handler for marking a task as completed
  const completeTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  // Event handler for deleting a task
  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Render function to update the component
  const render = () => {
    return (
      <div className="body">
        <div className="container">
          <h1>Daily Wellness</h1>
          <h2>Engage in daily self-care activities to provide structure and support during your grieving process. </h2>
          <div className="input-container">
            <input
              type="text"
              className="todo-input"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button className="todo-button" onClick={addTask}>
              Add
            </button>
          </div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`todo-item ${todo.completed ? 'completed' : ''}`}
              >
                <div className="todo-text">{todo.text}</div>
                <div className="todo-buttons">
                  {!todo.completed && (
                    <button
                      className="complete-btn button-style complete-button-style"
                      onClick={() => completeTask(index)}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  )}
                  <button
                    className="trash-btn button-style"
                    onClick={() => deleteTask(index)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return render();
}


