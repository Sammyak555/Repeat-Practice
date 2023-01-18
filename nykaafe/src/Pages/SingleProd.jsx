import { Button } from '@chakra-ui/react'
import React from 'react'
import "../css/Singleprod.css"

export const SingleProd = (el) => {
  return (
    <div className='sing-prod'>
        <div><h1>Prod. ID: {el._id}</h1></div>
        <div><img src={el.imgsrc} style={{width:"130px"}} alt="" /></div>
        <div>
        <p>{el.title}</p>
        </div>
       <div className='prod-btn'>
       <Button style={{marginRight:"7px"}}
        backgroundColor="orange"
        borderRadius={'none'}
        color={'white'}
        >Update</Button>
        <Button
            backgroundColor="red.600"
            borderRadius={'none'}
            color={'white'}
            style={{border:"1px solid grey"}}
        >Delete</Button>
       </div>
    </div>
  )
}
