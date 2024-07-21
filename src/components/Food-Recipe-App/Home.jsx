import { useContext } from "react";
import { GlobalContext } from "./Context";
import RecipeItem from "./RecipeItem";

export default function Home(){

    
    const {loading,recipes} = useContext(GlobalContext);

    
   
    if(loading){
        return <div>
            Loading Items... Please wait.
        </div>
    }
    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipes && recipes.length >0 ?
               recipes.map(item => <RecipeItem item={item} />)
            :
            <div>
                <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                Nothing to show. Please search something </p>
            </div>
        }
       
    </div>
}