import { TableRow } from "./TableRow.component";

export const Table = () => {
  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="relative py-3.5 px-4">
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
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
