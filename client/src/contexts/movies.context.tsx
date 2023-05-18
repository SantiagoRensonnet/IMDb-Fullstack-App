import { useState, useEffect, createContext } from "react";
import { MovieFetchData, MovieData, queryParamObject } from "../types";
import axios from "axios";
import useSWR from "swr";
//store(context)
export const MoviesContext = createContext({});

const getQueryURL = (params: queryParamObject) => {
  //base list url
  let url = "/movies?" + `sort_by=${params.sortOrder}(${params.sortBy})`;
  if (params.genre) url += `&genre=${params.genre}`;

  return url;
};

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
  const queryURL = getQueryURL(queryParams);
  const { data, error, isLoading } = useSWR(queryURL, (url: string) =>
    axios.get(url).then((res) => res.data)
  );

  useEffect(() => {
    if (!isLoading && data) {
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
  }, [data, isLoading]);
  return (
    <MoviesContext.Provider
      value={{ movies, queryParams, setQueryParams, isLoading }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
