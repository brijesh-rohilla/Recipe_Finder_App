import React from "react";

const Ingredients =(image2)=>{
  return(
    <div className="Item">
        <img src={image2}></img>
        <div className="flex-container">
            <h1 className="Title">Chiken</h1>
        </div>
        <p className="lead" id="item-data">Calories</p><br/>
        <a className="view-Button" href="#">View Recipe</a><br/><br/>
    </div>
  )
}
export default Ingredients