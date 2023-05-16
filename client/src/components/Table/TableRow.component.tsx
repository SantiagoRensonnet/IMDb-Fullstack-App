import { HiStar } from "react-icons/hi";
import { MovieFetchData } from "../types";
import { GenrePills } from "./GenrePills/GenrePills.component";
export const TableRow = (props: MovieFetchData) => {
  const {
    primaryTitle: title,
    averageRating: rating,
    runtimeMinutes: runtime,
    startYear: year,
    genres,
  } = props;

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
            {title}
          </h2>
        </div>
      </td>
      <td className="table-data">
        <GenrePills genres={genres} />
      </td>
      <td className="table-data">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">{year}</h4>
        </div>
      </td>
      <td className="table-data">
        <div className="flex items-center">
          <HiStar size={18} color={"rgb(245,197,24)"} />
          <span className="font-semibold">{rating}</span>
        </div>
      </td>

      <td className="table-data">{runtime} minutes</td>
    </tr>
  );
};
