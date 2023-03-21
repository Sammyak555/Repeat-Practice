import React, { useState } from 'react'
import { addTodo } from '../api'
import { Todo } from './Constants'

type todoInputProps = {
    onAdd : (todo:Todo) => void 
}

const TodoInput = (props : todoInputProps) => {
    const [value, setValue] = useState<string>('')
    const {onAdd} = props

    const handleChange = (e :React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       let data = await addTodo(value,false)
       onAdd(data)
       setValue('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}> 
            <input type="text" value={value} onChange={handleChange} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoInput