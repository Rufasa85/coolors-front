import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
export default function Navbar(props) {
  return (
    <nav className='Navbar'>
        {props.userId ?<span>Welcome, {props.username}!</span>:null}
        <Link to="/">Home</Link>
        {props.userId?<Link to="/newpallet">New Pallet</Link> :<Link to="/login">login</Link>}
        {props.userId?<Link to={`/user/${props.username}`}>My profile</Link> :<Link to="/signup">signup</Link>}
    </nav>
  )
}
