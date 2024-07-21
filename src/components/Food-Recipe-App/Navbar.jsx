import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "./Context";

export default function Navbar(){
    const {searchParam,setSearchParam,handleSubmit,length} = useContext(GlobalContext);
    return (
    
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0'>
    <h2 className='text-2xl font-semibold'>
        <NavLink to={"/"}>Food Recipe</NavLink>
    </h2>
    <form onSubmit={handleSubmit}>
        <input type="text"
            name="search"
            placeholder='Enter recipe'
            value ={searchParam}
            onChange={(e)=>setSearchParam(e.target.value)}
            className='bg-white/10 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 focus:outline-red-300'
        />
    </form>
    <ul className="flex gap-5">
        <li>
            <NavLink to={"/"} className="text-gray-700 hover:text-black text- duration-300">
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to={"/favourites"} className="text-gray-700 hover:text-black duration-300 relative">
            <span className="w-[10] h-auto px-1 py-0 rounded-full bg-black font-bold text-white absolute -right-2 -top-5"> {length}</span>
                Favourites
            </NavLink>
        </li>
    </ul>
</nav>
)

}