import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
  render() {
    return (
      <div className='todo-container'>
       


        <form className='input-section'>
        <h1>Todo App</h1>
            <input type="text" placeholder='eneter items....'/>
            
        </form>

        <ul>
            <li>
                item <i className="fa-solid fa-trash-can"></i>
            </li>
            <li>
                item <i className="fa-solid fa-trash-can"></i>
            </li>
            <li>
                item <i className="fa-solid fa-trash-can"></i>
            </li>
        </ul>
      </div>
    )
  }
}
