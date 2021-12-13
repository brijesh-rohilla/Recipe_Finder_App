import React from 'react'
import './Home.css'
import {Link} from "react-router-dom";
import Recipe from './Recipe';
import Header from './Header';

function Header1() {
    return (
            <header>
            <div className="container-fluid" id="main">
                <div className={`row align-items-center`} >
                   <div className="col text-center">
                       <h1 id="heading" className=" text-uppercase display-3 letter-spacing letter-slanted">Food Recipe App</h1>
                       <h3 id="heading1" className=" text-uppercase display-3 letter-spacing letter-slanted">Find your Recipe here....</h3> <br/><br/>                 
                        <Link to="header" className="text-uppercase btn3 "> Search Recipe </Link>
                   </div>
                </div>
            </div>
        </header>
    )
}

// Header1.defaultProps={
//     title:"Default Title",
//     style:"header-hero"
// };

export default Header1
