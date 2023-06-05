import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Todo } from './models/models';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("");
    }    
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo = {todo} setTodo = {setTodo} handleOnSubmit={handleOnSubmit}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
