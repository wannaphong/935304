import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todoT,settodoT] = useState("");
  const [todo,settodo] = useState([]);
  const onHandleSubmit = e =>{
    e.preventDefault();
    console.log(todo);
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} width='30' />
        เมนู
      </a>
      </nav>
      <div className="container mt-5">
        <form onSubmit={e => onHandleSubmit(e)}>
          <input type="text" className="form-control"
          onChange={e => settodo([...todo,e.target.value])} />
          <button type="submit" className="btn btn-dark">Save</button>
        </form>
        <ul className="list-group">
          <li className="list-group-item">First</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
