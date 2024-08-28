import { createContext } from "react";
import {useState} from 'react';

export const GlobalContext = createContext();


export default function GlobalState({children}){

    const [searchParam,setSearchParam] = useState("");
    const [loading,setLoading] = useState(false);
    const [recipes,setRecipes] = useState([]);
    const [recipeDetailsData,setRecipeDetailsData] = useState(null);
    const [favourites,setFavourites] = useState([]);
    const length = favourites.length;

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setLoading(true);
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json();
            setLoading(false);
            setRecipes(data.data.recipes);
            setSearchParam('');
            }
        catch(error){
            console.log(error.message);
            setLoading(false);
        }
    }

    function handleAddToFavorite(currentItem){
        
        let cpyfavourite = [...favourites];
        const index = cpyfavourite.findIndex(item => item.id === currentItem.id)
        if(index === -1){
            cpyfavourite.push(currentItem);
        }
        else{
            cpyfavourite.splice(index);
        }
        setFavourites(cpyfavourite);
    }

    console.log(favourites);

    
    return (<GlobalContext.Provider
    
        value={
            {
                handleSubmit,recipes,setSearchParam,searchParam,
                recipeDetailsData,setRecipeDetailsData,
                favourites,setFavourites,handleAddToFavorite,
                length,loading
                
            }
        }
    
    
    >
        {children}
    </GlobalContext.Provider>
    )
}