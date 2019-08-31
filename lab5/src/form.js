import React from 'react'

function form(props) {
    return (
        <div>
            <form>
                <input type="text" name="title" className="form-control" onChange={e => props.onHandleChange(e)}/>
                <input type="number" name="amount" className="form-control" onChange={e => props.onHandleChange(e)}/>
                <select name="type" onChange={e => props.onHandleChange(e)}>
                    <option value="1">รายรับ</option>
                    <option value="2">รายจ่าย</option>
                </select>
                <button type="submit" className="btn">บันทึก</button>
            </form>
        </div>
    )
}

export default form
