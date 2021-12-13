import React from "react";
import "./Header.css"
import App from "../App";
import { useState } from "react";
import { Link } from "react-router-dom";
import Singlerecipe from "./Singlerecipe";

const Recipe = ({title,calories,image,view,index,particularRecipe,ingredients}) => {
    
    const [toggle,settoggle] = useState('false');
    console.log(ingredients)
    return(
   
    <div className="Item">
         <img src={image}></img>
        <div className="flex-container">
            <h1 className="Title">{title}</h1>
            <a className="view-Button" href={view} target="_blank">View Recipe</a>
        </div><br/>
        <p className="lead" style={{fontWeight:'bold'}} id="item-data">Calories: {calories}</p>
        <p style={{color:'red'}} id="item-data">Recipe Ingredients</p>
        <div className="step">
            {ingredients.map(each => {
                    return(<h5 class="lead">{each.text}</h5>)           
            })}
        </div>
             {/* <Link className="view-Button" to={`/header/${index}/${particularRecipe}`} >View Ingredients</Link> */}
        {/* <h6>{ingredients}</h6>    */}
    </div>
   )
}

export default Recipe