//libs
import { useContext } from "react";

//contexts
import { QueryContext } from "../../contexts/query.context";
import { QueryContextType } from "../../types";
import "react-loading-skeleton/dist/skeleton.css";
//components
import { Table } from "./Table.component";
import { TableLoader } from "./Loader/TableLoader.component";

export const TableSection = () => {
  const limit = 10;
  const { isLoading } = useContext(QueryContext) as QueryContextType;
  return (
    <section className="container flex flex-col px-7 sm:px-4 mb-4">
      {!isLoading ? <Table /> : <TableLoader limit={limit} />}
    </section>
  );
};
