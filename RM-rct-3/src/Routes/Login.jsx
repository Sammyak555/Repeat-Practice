import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function Login() {
  const [data,setData] = useState({})
  const navigate = useNavigate()
  const {loginUser,authState} = useContext(AuthContext)

  const handleChange = (e) => {
    const {name,value} = e.target
    setData({...data,[name]:value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
   axios.post('https://reqres.in/api/login',data)
  .then((res)=>{
    if(res.data.token){
      loginUser(res.data.token)
      navigate('/dashboard')
    }
  }).catch((err)=>console.log(err))
  }


  return (
    <div className="login-page">
      <form className="form" onSubmit={handleSubmit} data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" type="email" onChange={handleChange}
            name="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password" onChange={handleChange}
              name="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
