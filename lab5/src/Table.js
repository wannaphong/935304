import React from 'react'

function Table(props) {
    return (
        <div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อรายการ</th>
      <th scope="col">จำนวนเงิน</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {props.list.map((item,index)=>(
        <tr>
      <th scope="row">{index+1}</th>
      <td>{item.title}</td>
      <td>{item.amount}</td>
      <td>{item.type}</td>
    </tr>
      ))}
    
  </tbody>
</table>
        </div>
    )
}

export default Table
