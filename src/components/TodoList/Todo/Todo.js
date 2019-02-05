import React from "react";

export default function Todo(props) {
  /** @namespace props.todo */
  return <li className='todos-container__todo'>
    <input type='checkbox'
           defaultChecked={props.todo.completed}
           onChange={() => {
             props.toggleCompleted(props.todo.id)
           }}/>
    <span
      style={{textDecoration: props.todo.completed ? 'line-through' : ''}}
    >
          {props.todo.text}
        </span>
    <button className='todos-container__todo--delete-button'
            onClick={() => props.onDelete(props.todo.id)}>X
    </button>
  </li>;
}