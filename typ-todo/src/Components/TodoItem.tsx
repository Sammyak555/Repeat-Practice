import React from 'react'
import { Todo } from './Constants'


const TodoItem = (item : Todo) => {
  // console.log(item)
  return (
    <div>{item.title} - {item.status ? "True" : "False"}</div>
  )
}

export default TodoItem