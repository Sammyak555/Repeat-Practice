import React, { useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle,  Button, Center, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({})

    const onChangeData=(e)=>{
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(data)
       await axios.post('http://localhost:5000/admin/login',data)
        .then((res)=>{
            if(res.data.token){
                console.log(res.data)
                navigate('/products')
            }else{
                alert("Invalid cred !")
            }
        })
        .catch((err)=>console.log(err))
    }


  return (
    <div style={{marginTop:"60px"}}>
         <Container w={'300px'} h="340px" border={'5px solid grey'}>
        <form onSubmit={handleSubmit}>
          <br />
          <Center><FormLabel fontSize={'20px'} color={"gray.600"}>Admin Login</FormLabel> </Center>
          <FormControl isRequired>
            <FormLabel  color={"gray.700"}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              size="l"
              onChange={onChangeData}
            />
          </FormControl>
          <FormControl isRequired mt={4}>
            <FormLabel color={"gray.700"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              size="l"
              name="password"
              onChange={onChangeData}
            />
          </FormControl>
          <Button
            variantcolor="teal"
            variant="outline"
            type="submit"
            width="auto"
            mt={4}
            backgroundColor="#FC2779"
            borderRadius={'none'}
            color={'white'}
          >
            LOGIN
          </Button>
        </form>
        <br />
        <p>Having trouble logging in?</p>

      </Container>
    </div>
  )
}

export default Login