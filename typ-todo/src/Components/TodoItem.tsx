import React from 'react'
import { updateTodo } from '../api'
import { Todo } from './Constants'

interface todoItemProps extends Todo{
  onUpdate : (todo : Todo)=> void
}

const TodoItem = (item : todoItemProps) => {
  
  const handleClick = async () => {
    let updatedTodos = await updateTodo({
      ...item,
      status : ! item.status
    })
    item.onUpdate(updatedTodos)
  }

  return (
    <div onClick={handleClick}>{item.title} - {item.status ? "True" : "False"}</div>
  )
}

export default TodoItem