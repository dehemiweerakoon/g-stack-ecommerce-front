import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
function NavBar() {
  const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to={'/'} style={{textDecoration:'none'}}>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to={'/mens'}style={{textDecoration:'none'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("woman")}}><Link to={'/woman'}style={{textDecoration:'none'}}>Woman</Link>{menu==="woman"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to={'/kids'} style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">
          <p>0</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar