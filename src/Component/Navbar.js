import React from 'react'
import logo from '../Image/11.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import img from '../Image/demo.png'

export default function Navbar() {
    return (
        <nav id="mainNav" className="navbar navbar-expand-sm navbar-light bg-light">
           <div className="logo">
               <Link to='/' className="navbar-band">
                  <img src={logo} alt="logo"></img>
                </Link>
           </div>

           <div id="Menu" className="collapse navbar-collapse show ml-sm-5">
               <ul className="navbar-nav">
                   <li className="navbar-item">
                       <Link className="nav-link" to='/'><h3 class="hh1">Home</h3></Link>
                   </li>
                   <li className="navbar-item">
                       <Link className="nav-link" to='/header'><h3 class="hh1">Recipe</h3></Link>
                   </li>
               </ul>
           </div>
        </nav>
    )
}
