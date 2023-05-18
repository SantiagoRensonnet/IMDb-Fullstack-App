import { useState, useEffect, createContext } from "react";
import { MovieFetchData, MovieData, queryParamObject } from "../types";
import axios from "axios";

//store(context)
export const MoviesContext = createContext({});

export const MoviesProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [movies, setMovies] = useState<Array<MovieData>>([]);
  const [queryParams, setQueryParams] = useState<queryParamObject>({
    sortBy: "rating",
    sortOrder: "desc",
  });
  useEffect(() => {
    const getData = async () => {
      const urlWithProxy =
        "/movies?" + `sort_by=${queryParams.sortOrder}(${queryParams.sortBy})`;
      try {
        const response = await axios.get(urlWithProxy);
        const rawDataArray: MovieFetchData[] = response.data.result;

        const formattedData =
          rawDataArray.length > 0
            ? rawDataArray.map((rawData) => ({
                id: rawData.tconst,
                rating: rawData.averageRating,
                genres: rawData.genres,
                title: rawData.primaryTitle,
                runtime: rawData.runtimeMinutes,
                year: rawData.startYear,
              }))
            : [];

        setMovies(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [queryParams]);
  return (
    <MoviesContext.Provider value={{ movies, queryParams, setQueryParams }}>
      {children}
    </MoviesContext.Provider>
  );
};
