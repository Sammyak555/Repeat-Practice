import React from 'react'
import { Link } from 'react-router-dom'
import "./adminNavbar.css"

const Navbar = () => {
  return (
    <div className='panelnav'>
        <Link to={'/products'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart0.png'></img>Products</Link>
        <Link to={'/users'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart2.png'></img>Users</Link>
    </div>
  )
}

export default Navbar