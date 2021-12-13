import React from "react";
import {useEffect,useState} from "react";
import Recipe from "./Recipe";
import "./Header.css"
import axios from "axios";


const Header=()=>{
    
    const [recipe, setRecipe ]=useState([])
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('')
    const [id,setid]=useState('');

    const takeData = (e) =>{
        setSearch(e.target.value)
       console.log(e.target.value);
    }

    const api_id='9db2c66d'
    const api_key='7fbda540e4d709b0267887e6dccbf517'
    const url=`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`

    useEffect(() => {
       console.log("Use Effect")
       getRecipe()
       setid(0)
    },[query])

    const getRecipe = async()=>{
        const response= await axios.get(url);
        console.log(response.data.hits)
        console.log(response.data)
        setid(response.data.hits.length)
        setRecipe(response.data.hits)
    }

    function getdata(e){
            e.preventDefault();
            setQuery(search)
    }
    return(
            <section>
                <div class="container">
                    <div className="search">
                    
                    <h1 className="brand"> Search Some Delicious Recipe.... </h1>
                    <h1 className="brand1">Type  name of recipe in text box</h1>
                   
                   <form onSubmit={getdata}>
                        <input type="Text" placeholder="Panir Masala, Noodles" onChange={takeData}></input>
                        {/* <ion-icon name="search"></ion-icon> */}
                        <button className="btn2">Search</button>
                    </form>

                   </div>
                    <div className="Search-Result container-fluid">
                      {
                          recipe.map((recipe,index)=>(
                          <Recipe
                          title={recipe.recipe.label}
                          calories={recipe.recipe.calories}
                          image={recipe.recipe.image}
                          index={index}
                          particularRecipe={recipe.recipe}
                          ingredients={recipe.recipe.ingredients}
                          view={recipe.recipe.url}
                          />))}
                          
                    </div>
                </div>
           </section>
    )
}

export default Header;