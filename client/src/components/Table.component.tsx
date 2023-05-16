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
              <tr>
                <td className="table-data">
                  <button className="px-2 py-2 w-16 rounded">
                    <img
                      className="rounded"
                      src="https://image.tmdb.org/t/p/original/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg"
                      alt="movie-poster"
                    />
                  </button>
                </td>
                <td className="table-data">
                  <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">
                      Harry Potter and the Chamber of Secrets
                    </h2>
                  </div>
                </td>
                <td className="table-data">
                  <div className="flex flex-wrap justify-left gap-2">
                    <div className="pill">Adventure</div>
                    <div className="pill">Family</div>
                    <div className="pill">Fantasy</div>
                  </div>
                </td>
                <td className="table-data">
                  <div>
                    <h4 className="text-gray-700 dark:text-gray-200">2002</h4>
                  </div>
                </td>
                <td className="table-data">
                  <div className="flex items-center">7.4</div>
                </td>

                <td className="table-data">2h 41min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
