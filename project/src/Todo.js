import React from 'react'

function Todo(props) {
    return (
        
        <div className="todo_style">
        <div className="fa fa-times" aria-hidden="true">
        <ol>
       <li> {props.text}</li>
       </ol>
       </div>
    </div>
    )
    }
export default Todo
