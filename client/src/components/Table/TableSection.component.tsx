//libs
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//types
import { MovieFetchData } from "../types";
//components
import { Table } from "./Table.component";

export const TableSection = () => {
  const [movies, setMovies] = useState<Array<MovieFetchData>>([]);
  useEffect(() => {
    const urlWithProxy = "/movies";
    const getData = async () => {
      try {
        const response = await axios.get(urlWithProxy);
        setMovies(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <section className="container flex flex-col px-4">
      {movies && movies.length > 0 ? <Table movies={movies} /> : <Skeleton />}
    </section>
  );
};
