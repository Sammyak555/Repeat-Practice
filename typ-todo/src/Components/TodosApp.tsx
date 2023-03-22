import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { getTodos } from '../api'
import { Todo } from './Constants'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'



const TodosApp = () => {
    const [todos,setTodos] = useState<Todo[]>([])


    useEffect(() => {
        getTodos().then((data)=>{
            setTodos(data)
        })
    },[])
    
    const onAdd = (todo : Todo) : void => {
        setTodos([...todos,todo])
    }
    const onUpdate = (updatedTodo : Todo) :void  => {
        let updatedTodos = todos.map((todo)=>{
            if(todo.id === updatedTodo.id){
                return updatedTodo
            }
            return todo
        })
        setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput onAdd = {onAdd}  />
        {
            todos?.map(item => {
                return <TodoItem  {...item} onUpdate ={onUpdate}/>
            })
        }
    </div>
  )
}

export default TodosApp