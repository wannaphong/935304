import React from 'react'

function todolist(props) {
    return (
        <div>
            <ul className="list-group">
          {props.todoitem.map((item,index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>
        </div>
    )
}

export default todolist;
