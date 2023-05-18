//libs
import { useState, useContext } from "react";
//contexts
import { MoviesContext } from "../../contexts/movies.context";
import { MoviesContextType } from "../../types";

export const GenreSelect = () => {
  const genres = [
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];
  const { queryParams, setQueryParams } = useContext(
    MoviesContext
  ) as MoviesContextType;
  const defaultValue = queryParams.genre || "";
  const [selectedGenre, setSelectedGenre] = useState(defaultValue);
  return (
    <article className="flex items-center mb-2 sm:mb-0">
      <select
        name="genre"
        id="genre"
        className="w-full p-2 text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
        value={selectedGenre}
        onChange={(e) => {
          const newGenre = e.target.value;
          setSelectedGenre(newGenre);
          setQueryParams((prevState) => ({ ...prevState, genre: newGenre }));
        }}
      >
        <option disabled value="">
          -- select genre --
        </option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </article>
  );
};
