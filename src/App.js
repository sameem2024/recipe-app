
import Home from "./components/Food-Recipe-App/Home";
import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Food-Recipe-App/Navbar";
import Favourites from "./components/Food-Recipe-App/Favourites";
import Details from "./components/Food-Recipe-App/Details";


function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />

      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/favourites" element = {<Favourites />}/>
        <Route exact path="/recipe-item/:id" element = {<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
