//libs
import { useContext } from "react";
//types
import { MoviesContextType } from "../../types";
//contexts
import { MoviesContext } from "../../contexts/movies.context";
//components
import { TableRow } from "./TableRow.component";

export const Table = () => {
  const { movies } = useContext(MoviesContext) as MoviesContextType;

  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="table-header">
                  <span className="sr-only">Poster</span>
                </th>
                <th scope="col" className="table-header">
                  Title
                </th>

                <th scope="col" className="table-header">
                  Genre
                </th>

                <th scope="col" className="table-header">
                  Year
                </th>

                <th scope="col" className="table-header">
                  Rating
                </th>

                <th scope="col" className="table-header">
                  Runtime
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              {movies?.map((movie) => (
                <TableRow key={movie.id} {...movie} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};