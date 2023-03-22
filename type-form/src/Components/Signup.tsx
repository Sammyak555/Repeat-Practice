import React, { useState } from 'react'
import "./signup.css"

const Signup = () => {
    const [data, setData] = useState({})

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data)
    } 

  return (
    <div className='signupbox'>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email' name='email' onChange={handleChange}/>
            <input type="password" placeholder='password' name='password' onChange={handleChange}/>
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup