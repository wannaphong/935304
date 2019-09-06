import React,{useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import H from './Header.js';
import Form from './Form.js';
import Table from './Table.js';

function App() {
  const [transaction,settransaction]=useState({
    amount:0,
    title:'',
    type:1
  });
  const onHandleChange = e =>{
settransaction({
  ...transaction,// ... แจกแจงสมาชิกเดิม
  [e.target.name]:e.target.value
})
  };
  const [list,setlist] = useState([]);
  const onSubmit = e =>{
    e.preventDefault();
    console.log("save");
    setlist([...list,transaction]);
    settransaction({
      ...transaction,
      amount:0,
      title:''
    });
  };
  return (
    <div>
      <H/>
      <div className="container">
    Hi
    <Form transaction={transaction} onHandleChange={onHandleChange} onSubmit={onSubmit} />
    <Table list={list} />
  </div>
  </div>

  );
}

export default App;
