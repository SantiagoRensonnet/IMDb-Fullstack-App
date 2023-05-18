import { useState, useEffect, createContext } from "react";
import { MovieFetchData, MovieData, queryParamObject } from "../types";
import axios from "axios";
import useSWR from "swr";
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
  const urlWithProxy =
    "/movies?" + `sort_by=${queryParams.sortOrder}(${queryParams.sortBy})`;
  const { data, error, isLoading } = useSWR(urlWithProxy, (url: string) =>
    axios.get(url).then((res) => res.data)
  );

  useEffect(() => {
    if (!isLoading) {
      const rawDataArray: MovieFetchData[] = data.result;
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
    }
  }, [data]);
  return (
    <MoviesContext.Provider
      value={{ movies, queryParams, setQueryParams, isLoading }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
