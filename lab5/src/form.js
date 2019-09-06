import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={e=>props.onSubmit(e)}>
                <input type="text" value={props.transaction.title} name="title" className="form-control" onChange={e => props.onHandleChange(e)}/>
                <input type="number" value={props.transaction.amount} name="amount" className="form-control" onChange={e => props.onHandleChange(e)}/>
                <select name="type" onChange={e => props.onHandleChange(e)}>
                    <option value="1">รายรับ</option>
                    <option value="2">รายจ่าย</option>
                </select>
                <button type="submit" className="btn">บันทึก</button>
            </form>
        </div>
    )
}

export default Form
