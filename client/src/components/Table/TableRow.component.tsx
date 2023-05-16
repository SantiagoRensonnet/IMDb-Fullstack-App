import { HiStar } from "react-icons/hi";
export const TableRow = () => {
  return (
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
        <div className="flex items-center">
          <HiStar size={18} color={"rgb(245,197,24)"} />
          <span className="font-semibold">7.4</span>
        </div>
      </td>

      <td className="table-data">2h 41min</td>
    </tr>
  );
};
