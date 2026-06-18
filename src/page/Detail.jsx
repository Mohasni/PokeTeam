import React, { useEffect, useState } from "react";
import Axios from "../api/Axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToTeam } from "../features/pokedex/teamsSlice";

const Detail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState("");

  const teams = useSelector((state) => state.teams);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`/pokemon/${name}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.error(err));
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  const isInTeam = () => {
    const exists = teams.find((p) => p.name === pokemon.name);
    const max = 6;
    if (exists) {
      setMessage("Ce Pokémon fait déjà partie de votre équipe.");
      return;
    }
    if (teams.length >= max) {
      setMessage("Votre équipe est deja complète !");
      return;
    }
    if (!auth.isAuthenticated){
      setMessage("connectez-vous pour ajouter un pokemon")
      return;
    }
    dispatch(
      addToTeam({
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types.map((t) => t.type.name).join(", "),
      })
    );
    setMessage("Pokémon ajouté à l'équipe !");
  };

const typeColors = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
  electric: "bg-yellow-400 text-black",
  ice: "bg-cyan-400",
  fighting: "bg-orange-700",
  poison: "bg-purple-600",
  ground: "bg-yellow-700",
  flying: "bg-indigo-400",
  psychic: "bg-pink-500",
  bug: "bg-lime-600",
  rock: "bg-stone-500",
  ghost: "bg-indigo-800",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-slate-400",
  fairy: "bg-pink-300 text-black",
  normal: "bg-gray-400",
};

  return (
 <div className=" px-4 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900">
        <header className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4 text-center">
          Detail Pokemon
        </h1>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Poké Ball"
          className="w-24 h-24"
        />
      </header>
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 dark:bg-gray-300">
      
      <h1 className="text-4xl font-extrabold text-center capitalize mb-6 text-gray-800">
        {pokemon.name}
      </h1>

      <div className="flex justify-center mb-8">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-56 h-56 object-contain"
        />
      </div>

      <div
        className={`text-white text-center py-3 rounded-xl font-semibold mb-6 bg-gradient-to-r`}
      >
        <div className="flex gap-2 justify-center mt-4">
  {pokemon.types.map((t) => (
    <span
      key={t.type.name}
      className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
        typeColors[t.type.name] || "bg-gray-500"
      }`}
    >
      {t.type.name}
    </span>
  ))}
</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">Taille</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">Poids</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">Vitesse</p>
          <p>{pokemon.stats[5].base_stat}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">XP</p>
          <p>{pokemon.base_experience}</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">Attaque</p>
          <p>{pokemon.stats[1].base_stat}</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4">
          <p className="font-semibold">Défense</p>
          <p>{pokemon.stats[2].base_stat}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          onClick={isInTeam}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl transition"
        >
          Ajouter à l'équipe
        </button>

        {message && (
          <p className="text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  </div>
  );
};

export default Detail;
