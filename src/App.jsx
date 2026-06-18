import "./index.css";
import Axios from "./api/Axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Pokedex from "./page/Pokedex";
import Gestion from "./page/Gestion-Equipe";
import Espace from "./page/Espace-Dresseur";
import Detail from "./page/Detail";
import Footer from "./components/Footer";
import Login from "./page/login";
import About from "./page/about";
import Register from "./page/Register";


function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
    if (loading) {
        return ( 
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white">
  <img
    src="https://i.pinimg.com/originals/8a/4a/72/8a4a7213b43f4ec4f99db406be655f9e.gif"
    alt="Loading"
    className="w-40 mb-6"
  />
  <p className="text-lg font-semibold text-gray-700 animate-pulse">
    Chargement du Pokédex...
  </p>
</div>
        )
    }
  return (
    <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/:name" element={<Detail />} />
        <Route path="/Gestion-Equipe" element={<Gestion />} />
        <Route path="/Espace-Dresseur" element={<Espace />} />
        <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
