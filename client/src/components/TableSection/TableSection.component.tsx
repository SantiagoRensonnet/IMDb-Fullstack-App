//libs
import { useContext } from "react";

//contexts
import { MoviesContext } from "../../contexts/movies.context";
import { MoviesContextType } from "../../types";
import "react-loading-skeleton/dist/skeleton.css";
//components
import { Table } from "./Table.component";
import { TableLoader } from "./Loader/TableLoader.component";

export const TableSection = () => {
  const limit = 10;
  const { isLoading } = useContext(MoviesContext) as MoviesContextType;
  return (
    <section className="container flex flex-col px-4 mb-4">
      {!isLoading ? <Table /> : <TableLoader limit={limit} />}
    </section>
  );
};
