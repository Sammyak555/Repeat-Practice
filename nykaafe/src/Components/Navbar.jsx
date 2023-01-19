import React from 'react'
import { Link } from 'react-router-dom'
import "./panelNavbar.css"

const Navbar = () => {
  return (
    <div className='panelnav'>
        <Link to={'/products'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart0.png' alt=''></img>Products</Link>
        <Link to={'/users'}><img src='https://nykaa-clone.itechscripts.com/admin/assets/img/pages/clipart2.png' alt=''></img>Users</Link>
    </div>
  )
}

export default Navbar