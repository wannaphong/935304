import React from 'react'

function form(props) {
    return (
        <form onSubmit={e => props.onHandleSubmit(e)}>
          <input type="text" className="form-control"
          onChange={e => props.settodoT(e.target.value)} />
          <button type="submit" className="btn btn-dark">Save</button>
        </form>
    )
}

export default form
