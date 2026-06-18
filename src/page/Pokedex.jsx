import React, { useEffect, useState } from "react";
import Axios from "../api/Axios";
import PokeCard from "../components/PokeCard";
import { MoveLeft } from 'lucide-react';
import { MoveRight } from 'lucide-react';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 60;

  useEffect(() => {
    const pages = (page - 1) * limit;

    Axios.get(`/pokemon?limit=${limit}&offset=${pages}`)
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  const searchs = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
<div className="px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900">
            <header className="flex flex-col items-center ">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 text-center">
          Gestion d'Équipe
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24"
        />
      </header>

  <div className="flex justify-center mb-6">
    <input
      className="w-full max-w-md px-4 py-2 rounded-xl border shadow dark:border-white dark:text-white"
      placeholder="Cherche ton Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {searchs.map((poke, index) => (
      <PokeCard key={index} Pokemon={poke} />
    ))}
  </ul>
  <div className="flex items-center justify-center gap-6 mt-10">
  <button
    disabled={page === 1}
    onClick={() => setPage(page - 1)}
    className={`p-3 rounded-full shadow transition 
      ${page === 1 
        ? "bg-gray-300 cursor-not-allowed" 
        : "bg-blue-600 hover:bg-blue-700 text-white"}
    `}
  >
    <MoveLeft />
  </button>

  <span className="text-lg font-bold text-gray-700">
    Page <span className="text-blue-600">{page}</span>
  </span>

  <button
    onClick={() => setPage(page + 1)}
    className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition"
  >
    <MoveRight />
  </button>
</div>
</div>

    </div>
  );
};

export default Pokedex;
