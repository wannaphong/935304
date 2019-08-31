import React,{useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import H from './Header.js';
import Form from './form.js';

function App() {
  const [transaction,settransaction]=useState({
    amount:0,
    title:'',
    type:''
  });
  var onHandleChange = e =>{
settransaction({
  ...transaction,// ... แจกแจงสมาชิกเดิม
  [e.target.name]:e.target.value
})
  };
  const [list,setlist] = useState([]);
  var onSubmit = e =>{
    e.preventDefualt();
  };
  return (
    <div>
      <H/>
      <div className="container">
    Hi
    <Form onHandleChange={onHandleChange} />
  </div>
  </div>

  );
}

export default App;
