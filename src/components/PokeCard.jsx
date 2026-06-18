import React, { useEffect, useState } from "react";
import Axios from "../api/Axios";
import { Link } from "react-router-dom";

const PokeCard = ({ Pokemon }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    Axios.get(Pokemon.url)
      .then((res) => {
        setImage(res.data.sprites.other.dream_world.front_default);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [Pokemon.url]);

  return (
    <li className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 text-gray-900 dark:text-gray-200">
      <Link to={`/${Pokemon.name}`} className="flex flex-col items-center p-4">
        <figure className="w-32 h-32 flex items-center justify-center mb-4">
          {image ? (
            <img
              src={image}
              alt={Pokemon.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
          )}
        </figure>

        <h1 className="text-lg font-bold capitalize text-gray-800 dark:text-gray-200">
          {Pokemon.name}
        </h1>
      </Link>
    </li>
  );
};

export default PokeCard;

