
import { useContext } from "react";
import { GlobalContext } from './Context';
import RecipeItem from './RecipeItem';

export default function Favourites({}){

    const {favourites} = useContext(GlobalContext);
   
    
    
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">

                {favourites && favourites.length > 0 &&
                    favourites.map((item) => 
                        <RecipeItem  item = {item}/>)
                }
        </div>
      );
    
}