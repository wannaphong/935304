import React,{useState,setState,state} from 'react';
import logo from './logo.svg';
import './App.css';
import { summarizers } from 'istanbul-lib-report';

var num=0;
function App() {
  const [todo,settodo] = useState([]);
  const onHandleSubmit = e =>{
    e.preventDefault();
    console.log(todo[todo.length-1]);
    num+=Number(todo[todo.length-1]);
    console.log(num);
    
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                
        </nav> 
      </header>
      <div className="container-fluid">
        <h3>โปรแกรมบันทึกรายรับ</h3>
        <p>The .navbar-brand class is used to highlight the brand/logo/project name of your page.</p>
        <form id="add" className="form-inline" onSubmit={e => onHandleSubmit(e)}>
        <label for="receipts">Receipts : </label>
        <input onChange={e => settodo([...todo,e.target.value])}  type="number"  class="form-control" id="receipts" placeholder="Enter receipts" name="receipts"></input>
        <button type="submit" className="btn btn-dark">Save</button>
        </form>
      <div>
        รายได้ทั้งหมด : <div name="sum">{String(num)} บาท</div>
      </div>
    </div>
    </div>
  );
}

export default App;
