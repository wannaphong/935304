import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import H from './h'; // จาก h.js
import Todolist from './todolist';
import Form from './form'

function App() {
  const [todoT,settodoT] = useState("");
  const [todo,settodo] = useState([]);
  const onHandleSubmit = e =>{
    e.preventDefault();
    todo.push(todoT);
    settodoT("");
    console.log(todo);
  };
  return (
    <div className="App">
      <H />
      <div className="container mt-5">
        <Form onHandleSubmit={onHandleSubmit} settodoT={settodoT} />
        <Todolist todoitem={todo}  />
      </div>
    </div>
  );
}

export default App;
