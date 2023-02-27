import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";

const getproducts = (pages,sortBy) => {
  return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${pages}&limit=10&orderBy=${sortBy}`)
  
}

function Dashboard() {
  const {logoutUser,authState} = useContext(AuthContext)
  const [loading,setLoading] = useState(false)
  const [product,setProduct] = useState([])
  const [totalpages,setTotalpages] = useState(1)
  const [pages,setPages] = useState(1)
  const [sortBy,setSortBy] = useState('asc')
  const [error,setError] = useState(false)

  useEffect(()=>{
    setLoading(true)
    getproducts(
      pages,
      sortBy
    ).then((res)=>{
      setProduct(res.data.data)
      setLoading(false)
      setTotalpages(res.data.totalPages)
      
    }).catch((err)=>console.log(err))
  },[pages,sortBy])

  console.log(product)

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
