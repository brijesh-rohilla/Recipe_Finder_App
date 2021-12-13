import React from 'react'
import {Link} from 'react-router-dom'

const Error=() =>{
    return (
        <header>
           <div className="container-fluid" id="main">
               <div className={`row align-items-center`} >
                  <div className="col text-center">
                      <h1 id="heading" className=" text-uppercase display-3 letter-spacing letter-slanted">404</h1>
                      <h1 id="heading1" className=" text-uppercase display-3 letter-spacing letter-slanted"> Data Not Found</h1> <br/>
                        <Link to="/" className="text-uppercase btn3 "> Back to Home </Link>
                  </div>
               </div>
           </div>
       </header>
    )
}

export default Error


// import React, { Component } from 'react'
// import './Home.css'
// import {Link} from "react-router-dom";

// export default class Error extends Component {
//     render() {
//         return (
//             <div><h1>Mona</h1></div>
//         //     <header>
//         //     <div className="container-fluid" id="main">
//         //         <div className={`row align-items-center`} >
//         //            <div className="col text-center">
//         //                <h1 id="heading" className=" text-uppercase display-3 letter-spacing letter-slanted">404 : Data Not Found</h1>
//         //            </div>
//         //         </div>
//         //     </div>
//         // </header>
//         )
//     }
// }
