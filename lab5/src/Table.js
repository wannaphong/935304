import React from 'react';
import classnames from 'classnames';

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
        <tr key={index} className={classnames(item.type==1 ? 'table-success' : 'table-danger')}>
      <th scope="row">{index+1}</th>
      <td>{item.title}</td>
      <td>{item.amount}</td>
      <td><button type="button" className="btn btn-sm btn-outline-danger" onClick={e=>props.onDelete(item.id)}>x</button></td>
    </tr>
      ))}
    
  </tbody>
</table>
        </div>
    )
}

export default Table
