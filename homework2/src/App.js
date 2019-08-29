import React,{useState} from 'react';
import './App.css';
import Header from './Header.js'; // ดึง Header

var num=0;// ประกาศต้นแปร num ให้มีค่าเป็น 0 (int) เหนือฟังก์ชัน App เพื่อใช้เก็บค่ารายรับ
function App() {
  const [todo,settodo] = useState([]);// ประกาศ todo,settodo ส่วน useState (อย่าลืมใส่ในส่วน import ด้วย)
  const [sum, setSum] = useState( '' );// ประกาศ sum, setSum ส่วน useState ใช้เก็บผลรวมรายรับ (อย่าลืมใส่ในส่วน import ด้วย)
  const [list,setList] = useState([]); // ประกาศ list,setList ใช้สำหรับแสดง list รายรับ
  const onHandleSubmit = e =>{// ประกาศ onHandleSubmit
    e.preventDefault();
    num+=Number(todo[todo.length-1]);// ข้อมูลที่ได้รับจะเป็น array โดยตำแหน่งสุดท้ายจะเป็นค่าที่ป้อนมาล่าสุด เราเลยดึงเฉพาะข้อมูลค่าล่าสุดมาใช้ จากนั้นมาบวกกับตัวแปร num โดยบวกเพิ่มค่าค่าที่ป้อนมาล่าสุดเข้าไป
    setSum(num);// กำหนดค่าให้ sum ใหม่โดยเป็นผลบวกรายรับจาก num
    list.push(todo[todo.length-1]); // เอาข้อมูลใส่ array
  };
  return (
    <div>
      <Header/>
      <div className="container center">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white"><h3>โปรแกรมบันทึกรายรับ</h3></div>
                <div className="card-body">
                  <p>เรามาบันทึกรายรับกัน</p>
                    <form id="add" className="form-inline" onSubmit={e => onHandleSubmit(e)}>
                      <label for="receipts">Receipts : </label>
                      <input onChange={e => settodo([...todo,e.target.value])}  type="number"  class="form-control" id="receipts" placeholder="Enter receipts" name="receipts"></input>
                      <button type="submit" className="btn btn-dark">Save</button>
                    </form>
                </div>
                <div className="card-footer">
                  <div>
                    รายรับ 
                    <ul className="list-group">
                    {list.map((item,index) => ( // ลูปข้อมูลใน l มาโชว์เป็นรายการ
                      <li key={index} className="list-group-item">{item}</li>
                    ))}
                    </ul>
                  </div>
                  <div name="sum">
                    รายรับทั้งหมด : {sum} บาท
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
