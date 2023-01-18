import { Textarea } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import "../css/Products.css"
import { SingleProd } from './SingleProd'

const getprods = (setData) => {
  return axios.get(`http://localhost:5000/face/`)
    .then((res) => setData(res.data))
    .then((err) => console.log(err))
}
const Products = () => {
  const [data, setData] = useState([])
  const [jsdata,setJsdata] = useState([])
  useEffect(() => {
    getprods(setData)
  }, [setData])
  // console.log(data)

  // const handleChange=(e)=>{
  //   const {name,value} = e.target
  //   setJsdata({...data,[name]:value})
  //   }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(jsdata)
    axios.post('http://localhost:5000/face/addjson',jsdata)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
  }

  return (
    <div className='admin-products'>
      <div className='adding-product'>
        <div>
          <form onSubmit={handleSubmit}>
          <label >You Have JSON File !!!</label>
          <Textarea
            placeholder='You Have JSON File ! Paste or Drop Here !!!'
            size='sm'
            name='jsonfile'
            onChange={(e)=>setJsdata((e.target.value))}
            />
          <input type="submit" />
            </form>
        </div>

      </div>
      <div className='all-products'>
        {
          data.length > 0 &&
          data.map((el) => {
            return (<div key={Date.now() + Math.random()}>
              <SingleProd {...el} />
            </div>)
          })
        }
      </div>

    </div>
  )
}

export default Products