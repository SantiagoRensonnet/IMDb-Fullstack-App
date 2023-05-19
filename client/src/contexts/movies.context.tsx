import { useState, createContext } from "react";
import { MovieData } from "../types";

//store(context)
export const MoviesContext = createContext({});

export const MoviesProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [movies, setMovies] = useState<Array<MovieData>>([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
