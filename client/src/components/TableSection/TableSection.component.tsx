//libs
import { useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
//types
import { MovieFetchData } from "../../types";
//components
import { Table } from "./Table.component";

export const TableSection = () => {
  const [movies, setMovies] = useState<Array<MovieFetchData>>([]);

  return (
    <section className="container flex flex-col px-4 mb-4">{<Table />}</section>
  );
};
