import React,{useState} from 'react';
import './App.css';
import Header from './Header.js';

var num=0;
function App() {
  const [todo,settodo] = useState([]);
  const [sum, setSum] = useState( '' );
  const onHandleSubmit = e =>{
    e.preventDefault();
    //console.log(todo[todo.length-1]);
    num+=Number(todo[todo.length-1]);
    //console.log(num);
    setSum(num);
  };
  return (
    <div>
      <Header/>
      <div className="container-fluid">
        <h3>โปรแกรมบันทึกรายรับ</h3>
        <p>เรามาบันทึกรายรับกัน</p>
        <form id="add" className="form-inline" onSubmit={e => onHandleSubmit(e)}>
        <label for="receipts">Receipts : </label>
        <input onChange={e => settodo([...todo,e.target.value])}  type="number"  class="form-control" id="receipts" placeholder="Enter receipts" name="receipts"></input>
        <button type="submit" className="btn btn-dark">Save</button>
        </form>
        <br />
      <div>
        <div name="sum">รายได้ทั้งหมด : {sum} บาท</div>
      </div>
    </div>
    </div>
  );
}

export default App;
